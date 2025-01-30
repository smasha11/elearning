from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize Flask application
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///elearning.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
CORS(app)  # Enable CORS for cross-origin requests

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

# Initialize the database and run the application
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create all database tables
    app.run(debug=True, port=5001)  # Use port 5001 instead of the default 5000
