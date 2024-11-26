import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-orange-500 transition duration-300 ease-in-out">
            DevSoft
          </a>
        </div>

      
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            className="text-white text-lg py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white text-lg py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-white text-lg py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white text-lg py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>

       
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50"
          >
            {isOpen ? (
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      
      <div
        className={`md:hidden fixed top-0 right-0 bg-gray-800 w-3/4 h-full transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="py-4 space-y-4 px-6 relative">
          <a
            href="#about"
            className="block text-white text-lg text-center py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
            onClick={toggleMenu} 
          >
            About Us
          </a>
          <a
            href="#services"
            className="block text-white text-lg text-center py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="block text-white text-lg text-center py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block text-white text-lg text-center py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
