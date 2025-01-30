import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Mentorship from "./components/Mentorship";
import About from "./components/About";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import Html from "./components/Html";
import ScrollToTop from "./components/Scrool";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Admindashboard from "./components/Admindashboard";
import ContactDash from "./components/Contactdash";
import CourseDashboard from "./components/Coursedashboard";
import Css from "./components/Css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]); // State to track cart items

  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddToCart = (course) => {
    // Add course to cart if not already present
    if (!cart.some((item) => item.id === course.id)) {
      setCart((prevCart) => [...prevCart, course]);
    }
  };

  const handleRemoveFromCart = (id) => {
    // Remove course from cart by ID
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <ScrollToTop />
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        cartCount={cart.length} // Pass cart count to Header
      />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/contactdash" element={<ContactDash />} />
        <Route path="/coursedashboard" element={<CourseDashboard />} />
        <Route path="/Css" element={<Css />} />

        {/* Pass cart management handlers to Html */}
        <Route
          path="/html"
          element={
            <Html
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        {/* Pass cart data and handlers to Cart */}
        <Route
          path="/cart"
          element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLoginStatusChange} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
