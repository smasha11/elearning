import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/futuredev.png";

const linkStyles =
  "text-white hover:text-yellow-300 transition duration-300 ease-in-out";

function Header() {
  return (
    <header className=" fonts bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 w-full">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
          <span className="text-2xl md:text-3xl font-bold text-white ml-2 md:ml-4">
            FutureDev
          </span>
        </NavLink>
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {["Home", "Courses", "Mentorship", "About", "Signup", "Admin"].map(
            (text) => (
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
            )
          )}
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300"
            aria-label="Toggle navigation"
            id="mobile-menu-button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        className="md:hidden flex flex-col space-y-4 px-4 pb-4 hidden"
        id="mobile-menu"
      >
        {["Home", "Courses", "Mentorship", "About", "Signup", "Admin"].map(
          (text) => (
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
          )
        )}
      </nav>
    </header>
  );
}

export default Header;
