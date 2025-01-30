from flask import Flask, jsonify, make_response, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError

# Initialize Flask app and other extensions
app = Flask(__name__)
CORS(app)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profile.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

# User model with essential fields for sign-up
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    # Method to hash the password before storing it
    def set_password(self, password):
        self.password = generate_password_hash(password)

    # Method to check password validity
    def check_password(self, password):
        return check_password_hash(self.password, password)

# Marshmallow Schema for User
class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True

# Create the database tables (run once before using the app)
with app.app_context():
    db.create_all()

# Route to fetch all users
@app.route('/signup', methods=['GET'])
def get_users():
    users = User.query.all()
    user_schema = UserSchema(many=True)
    result = user_schema.dump(users)
    return jsonify(result)

# Route to create a new user (sign-up)
@app.route('/signup', methods=['POST'])
def sign_up():
    data = request.get_json()

    # Ensure all required fields are present
    if not data.get('username') or not data.get('email') or not data.get('password'):
        return make_response(jsonify({'message': 'Missing required fields'}), 400)
    
    # Check if the username or email already exists
    existing_user = User.query.filter((User.username == data['username']) | (User.email == data['email'])).first()
    if existing_user:
        return make_response(jsonify({'message': 'Username or email already exists'}), 400)

    try:
        # Create a new user
        new_user = User(username=data['username'], email=data['email'], password='')
        new_user.set_password(data['password'])

        # Add user to the database
        db.session.add(new_user)
        db.session.commit()

        # Serialize the user object
        user_schema = UserSchema()
        result = user_schema.dump(new_user)

        return make_response(jsonify({'message': 'User created successfully', 'user': result}), 201)

    except IntegrityError:
        db.session.rollback()
        return make_response(jsonify({'message': 'An error occurred. Please try again later.'}), 500)

# Route to login a user (validate password)
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    # Ensure required fields are provided
    if not data.get('email') or not data.get('password'):
        return make_response(jsonify({'message': 'Missing required fields'}), 400)

    # Find user by email
    user = User.query.filter_by(email=data['email']).first()
    if not user or not user.check_password(data['password']):
        return make_response(jsonify({'message': 'Invalid credentials'}), 401)

    # Serialize user object
    user_schema = UserSchema()
    result = user_schema.dump(user)

    return make_response(jsonify({'message': 'Login successful', 'user': result}), 200)

# Route to delete a user
@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        return make_response(jsonify({'message': 'User not found'}), 404)
    try:
        db.session.delete(user)
        db.session.commit()
        return make_response(jsonify({'message': 'User deleted successfully'}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'An error occurred while deleting user', 'error': str(e)}), 500)

# Route to update a user
@app.route('/signup/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if not user:
        return make_response(jsonify({'message': 'User not found'}), 404)
    
    data = request.get_json()
    try:
        if 'username' in data:
            user.username = data['username']
        if 'email' in data:
            user.email = data['email']
        if 'password' in data:
            user.set_password(data['password'])

        db.session.commit()
        user_schema = UserSchema()
        result = user_schema.dump(user)
        return make_response(jsonify({'message': 'User updated successfully', 'user': result}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'An error occurred while updating user', 'error': str(e)}), 500)

# --------- Courses Routes ---------

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    duration = db.Column(db.String(50), nullable=False)
    difficulty = db.Column(db.String(50), nullable=False)
    instructor = db.Column(db.String(100), nullable=False)

    def __init__(self, title, description, duration, difficulty, instructor):
        self.title = title
        self.description = description
        self.duration = duration
        self.difficulty = difficulty
        self.instructor = instructor

class CourseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Course
        load_instance = True

@app.route('/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    course_schema = CourseSchema(many=True)
    result = course_schema.dump(courses)
    return jsonify(result)

@app.route('/courses', methods=['POST'])
def add_course():
    data = request.get_json()

    if not data.get('title') or not data.get('description') or not data.get('duration') or not data.get('difficulty') or not data.get('instructor'):
        return make_response(jsonify({'message': 'Missing required fields'}), 400)

    new_course = Course(
        title=data['title'],
        description=data['description'],
        duration=data['duration'],
        difficulty=data['difficulty'],
        instructor=data['instructor']
    )

    try:
        db.session.add(new_course)
        db.session.commit()
        course_schema = CourseSchema()
        result = course_schema.dump(new_course)
        return make_response(jsonify({'message': 'Course added successfully', 'course': result}), 201)
    except IntegrityError:
        db.session.rollback()
        return make_response(jsonify({'message': 'An error occurred while adding the course'}), 500)

@app.route('/courses/<int:id>', methods=['DELETE'])
def delete_course(id):
    course = Course.query.get(id)
    if not course:
        return make_response(jsonify({'message': 'Course not found'}), 404)

    try:
        db.session.delete(course)
        db.session.commit()
        return make_response(jsonify({'message': 'Course deleted successfully'}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'An error occurred while deleting course', 'error': str(e)}), 500)

@app.route('/courses/<int:id>', methods=['PUT'])
def update_course(id):
    course = Course.query.get(id)
    if not course:
        return make_response(jsonify({'message': 'Course not found'}), 404)

    data = request.get_json()
    try:
        if 'title' in data:
            course.title = data['title']
        if 'description' in data:
            course.description = data['description']
        if 'duration' in data:
            course.duration = data['duration']
        if 'difficulty' in data:
            course.difficulty = data['difficulty']
        if 'instructor' in data:
            course.instructor = data['instructor']

        db.session.commit()
        course_schema = CourseSchema()
        result = course_schema.dump(course)
        return make_response(jsonify({'message': 'Course updated successfully', 'course': result}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'An error occurred while updating course', 'error': str(e)}), 500)
    
    # Contact Model
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Primary Key
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)

# Create the database if it doesn't exist
with app.app_context():
    db.create_all()

# Route to handle form submissions (Contact)
@app.route('/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()  # Retrieve JSON payload
        # Ensure all required fields are provided
        if not data.get('name') or not data.get('email') or not data.get('message'):
            return make_response(jsonify({"error": "All fields are required"}), 400)

        # Create a new Contact entry
        new_contact = Contact(name=data['name'], email=data['email'], message=data['message'])
        db.session.add(new_contact)
        db.session.commit()
        return jsonify({"message": "Contact saved successfully"}), 201
    except Exception as e:
        db.session.rollback()  # Roll back if an error occurs
        return make_response(jsonify({"error": str(e)}), 500)

# Route to fetch all contacts
@app.route('/contacts', methods=['GET'])
def get_contacts():
    try:
        contacts = Contact.query.all()  # Fetch all contact records
        contact_list = [{"id": contact.id, "name": contact.name, "email": contact.email, "message": contact.message} for contact in contacts]
        return jsonify(contact_list)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
