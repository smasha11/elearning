import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/futuredev.png";

const linkStyles =
  "text-white hover:text-yellow-300 transition duration-300 ease-in-out";

function Header({ isLoggedIn, onLogout, cartCount }) {
  const navigate = useNavigate();
  const [localCartCount, setLocalCartCount] = useState(cartCount);

  useEffect(() => {
    setLocalCartCount(cartCount);
  }, [cartCount]);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/");
  };

  return (
    <header className="fonts bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 w-full">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
          <span className="text-2xl md:text-3xl font-bold text-white ml-2 md:ml-4">
            FutureDev
          </span>
        </NavLink>
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {["Home", "Courses", "Mentorship", "About"].map((text) => (
            <NavLink
              key={text}
              to={`/${text.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? `font-bold text-yellow-300 ${linkStyles}`
                  : linkStyles
              }
            >
              {text}
            </NavLink>
          ))}
          <NavLink to="/cart" className={linkStyles}>
            Cart ({localCartCount})
          </NavLink>
          {!isLoggedIn ? (
            <NavLink to="/login" className={linkStyles}>
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
