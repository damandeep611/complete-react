import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky z-50 top-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
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
                      : "text-gray-600 hover:text-gray-900"
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
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`
                }
              >
                Gitub
              </NavLink>
            </li>
          </ul>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors duration-200"
            >
              Get started
            </Link>
          </div>
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-4 text-2xl font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-4 text-2xl font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-4 text-2xl font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `block py-4 text-2xl font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-200`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Github
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="#"
              className="w-full text-center text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="#"
              className="w-full text-center text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
