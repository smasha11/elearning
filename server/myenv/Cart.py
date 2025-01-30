from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import paypalrestsdk  # Install PayPal SDK with pip install paypalrestsdk

# Initialize Flask application
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///elearning.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
CORS(app)  # Allow cross-origin requests

# Configure PayPal
paypalrestsdk.configure({
    'mode': 'sandbox',  # Use 'live' in production
    'client_id': 'YOUR_PAYPAL_CLIENT_ID',
    'client_secret': 'YOUR_PAYPAL_CLIENT_SECRET'
})

# Database Models
class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)

class CartItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)

# API Routes
@app.route('/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([{
        'id': course.id,
        'name': course.name,
        'description': course.description,
        'price': course.price,
        'image_url': course.image_url
    } for course in courses])

@app.route('/cart', methods=['GET'])
def get_cart():
    cart_items = CartItem.query.all()
    cart = []
    total_price = 0
    for item in cart_items:
        course = Course.query.get(item.course_id)
        if course:
            cart.append({
                'id': course.id,
                'name': course.name,
                'price': course.price,
                'image_url': course.image_url
            })
            total_price += course.price
    return jsonify({'cart': cart, 'total_price': total_price})

@app.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    course_id = data.get('course_id')

    if not course_id:
        return jsonify({'error': 'Course ID is required'}), 400

    course = Course.query.get(course_id)
    if not course:
        return jsonify({'error': 'Course not found'}), 404

    existing_item = CartItem.query.filter_by(course_id=course_id).first()
    if existing_item:
        return jsonify({'message': 'Course already in cart'}), 400

    new_item = CartItem(course_id=course_id)
    db.session.add(new_item)
    db.session.commit()
    return jsonify({'message': f'{course.name} added to cart successfully'})

@app.route('/cart/<int:course_id>', methods=['DELETE'])
def remove_from_cart(course_id):
    cart_item = CartItem.query.filter_by(course_id=course_id).first()
    if not cart_item:
        return jsonify({'error': 'Course not in cart'}), 404

    db.session.delete(cart_item)
    db.session.commit()
    return jsonify({'message': 'Course removed from cart successfully'})

@app.route('/purchase', methods=['POST'])
def purchase():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        address = data.get('address')

        # Validate input
        if not all([name, email, address]):
            return jsonify({'error': 'Missing required fields'}), 400

        cart_items = CartItem.query.all()
        if not cart_items:
            return jsonify({'error': 'No items in the cart'}), 400

        total_price = sum(Course.query.get(item.course_id).price for item in cart_items)

        # Create PayPal payment
        payment = paypalrestsdk.Payment({
            'intent': 'sale',
            'payer': {'payment_method': 'paypal'},
            'transactions': [{
                'amount': {'total': str(total_price), 'currency': 'USD'},
                'description': 'E-learning Course Purchase',
            }],
            'redirect_urls': {
                'return_url': 'http://localhost:5173/payment/success',
                'cancel_url': 'http://localhost:5173/payment/cancel'
            }
        })

        if payment.create():
            approval_url = next(link.href for link in payment.links if link.rel == 'approval_url')
            return jsonify({'approval_url': approval_url})
        else:
            return jsonify({'error': 'Failed to create PayPal payment', 'details': payment.error}), 500

    except Exception as e:
        print(f"Error in /purchase endpoint: {e}")
        return jsonify({'error': 'Internal server error'}), 500

# Add sample data (optional)
@app.route('/seed', methods=['POST'])
def seed_data():
    sample_courses = [
        {
            'name': 'HTML Basics',
            'description': 'Learn the fundamentals of HTML.',
            'price': 29.99,
            'image_url': 'https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040425.jpg'
        },
        {
            'name': 'JavaScript Essentials',
            'description': 'Master JavaScript for web development.',
            'price': 39.99,
            'image_url': 'https://img.freepik.com/premium-photo/css-javascript-html-usage-monitor-closeup-function-source-code-abstract-it-technology-background-software-source-code_372999-1057.jpg'
        },
        {
            'name': 'React Advanced',
            'description': 'Dive deep into React development.',
            'price': 49.99,
            'image_url': 'https://img.freepik.com/premium-vector/ui-ux-agency-icon_990672-239.jpg'
        }
    ]

    for course in sample_courses:
        if not Course.query.filter_by(name=course['name']).first():
            new_course = Course(
                name=course['name'],
                description=course['description'],
                price=course['price'],
                image_url=course['image_url']
            )
            db.session.add(new_course)

    db.session.commit()
    return jsonify({'message': 'Sample courses added successfully'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create all database tables
    app.run(debug=True)
