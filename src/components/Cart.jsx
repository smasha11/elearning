import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Cart = ({ cart, onRemoveFromCart }) => {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  const handleRemoveCourse = (id) => {
    onRemoveFromCart(id);
  };

  const handleProceedToPayment = () => {
    // Navigate to Css.jsx
    navigate("/css"); // You can adjust this to your route if needed
  };

  const totalPrice = 0; // Price is set to 0 for all items in the cart

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
        Your Cart
      </h1>

      <div className="flex flex-wrap gap-6 mb-12 justify-center">
        {cart.map((course) => (
          <div
            key={course.id}
            className="border-2 border-gray-300 rounded-lg shadow-lg p-4 flex items-center"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{course.name}</h3>
              <p className="text-gray-600">${course.price}</p>
            </div>
            <button
              onClick={() => handleRemoveCourse(course.id)}
              className="text-red-500 text-lg font-semibold"
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <button
          onClick={handleProceedToPayment}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Proceed to course
        </button>
      </div>
    </div>
  );
};

export default Cart;
