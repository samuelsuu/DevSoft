import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Logo and Description */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl font-extrabold text-orange-500">DevSoft</h1>
          <p className="text-gray-400 text-sm mt-2">Your trusted partner in software development, training, consulting, and more.</p>
        </div>

        {/* Footer Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <li>
            <a href="#services" className="text-gray-400 hover:text-orange-500 transition-all duration-300 ease-in-out">Services</a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-all duration-300 ease-in-out">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-all duration-300 ease-in-out">Contact</a>
          </li>
        </ul>

        {/* Footer Bottom Text */}
        <div className="text-center mt-6 md:mt-0">
          <p className="text-gray-400 text-sm">© 2024 DevSoft, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;