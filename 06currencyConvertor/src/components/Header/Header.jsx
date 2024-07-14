import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky z-50 top-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://img.icons8.com/color/48/currency-exchange.png"
              className="h-8 mr-3"
              alt="Logo"
            />
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-gray-900"
                  } transition-colors duration-200`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
