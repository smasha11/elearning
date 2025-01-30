import React from "react";
import { NavLink } from "react-router-dom";

const Admindashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-blue-900 text-white min-h-screen">
          <div className="p-6 text-center text-2xl font-bold">
            Admin Dashboard
          </div>
          <nav className="mt-6">
            <NavLink
              to="/Admin"
              className={({ isActive }) =>
                `block py-2 px-4 hover:bg-blue-700 rounded-lg ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
            >
              Manage Users
            </NavLink>
            <NavLink
              to="/Coursedashboard"
              className={({ isActive }) =>
                `block py-2 px-4 hover:bg-blue-700 rounded-lg ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
            >
              Manage Courses
            </NavLink>
            <NavLink
              to="/Contactdash"
              className={({ isActive }) =>
                `block py-2 px-4 hover:bg-blue-700 rounded-lg ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
            >
              Manage Contacts
            </NavLink>
            <NavLink
              to="/Coursedashboard"
              className={({ isActive }) =>
                `block py-2 px-4 hover:bg-blue-700 rounded-lg ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
            >
              Analytics
            </NavLink>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `block py-2 px-4 hover:bg-blue-700 rounded-lg ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
            >
              Settings
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to Admin Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NavLink
              to="/Admin"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Users
              </h2>
              <p className="text-gray-600">
                Add, update, or delete users in the system.
              </p>
            </NavLink>
            <NavLink
              to="/Coursedashboard"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Courses
              </h2>
              <p className="text-gray-600">
                Add, update, or delete courses offered to students.
              </p>
            </NavLink>
            <NavLink
              to="/Contactdash"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Manage Contact
              </h2>
              <p className="text-gray-600">read user feedback .</p>
            </NavLink>
            <NavLink
              to="/admin/analytics"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Analytics
              </h2>
              <p className="text-gray-600">
                View system statistics and reports.
              </p>
            </NavLink>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admindashboard;
