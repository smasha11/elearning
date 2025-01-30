import React, { useState, useEffect } from "react";
import axios from "axios";

const Payment = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/payments"); // Replace with your API endpoint
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // Handle adding a course to the cart
  const handleAddToCart = async (course) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/cart", {
        course_id: course.id,
        course_name: course.name,
      });
      if (response.status === 200) {
        // Update the cart state
        setCart((prevCart) => [...prevCart, course]);

        // Show a success message
        setSuccessMessage(`${course.name} has been added to your cart!`);
        setTimeout(() => setSuccessMessage(""), 3000); // Clear the message after 3 seconds
      }
    } catch (error) {
      console.error("Error adding course to cart:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>

      {/* Success message */}
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{course.name}</h2>
            <p className="text-gray-600">{course.description}</p>
            <p className="font-bold mt-2">Price: ${course.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
              onClick={() => handleAddToCart(course)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
