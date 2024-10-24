import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from React Router DOM

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="h-20 w-full flex justify-between items-center p-6 md:p-8">
        {/* Left: Logo */}
        <div className="left">
          <span className="text-3xl font-bold text-black">AutoBib</span>
        </div>

        {/* Right: Menu for desktop */}
        <div className="right hidden md:flex gap-6">
          <Link 
            to="/" // Change to Link component for navigation
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/about" // Change to Link
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
          >
            About
          </Link>
          <Link 
            to="/guide" // Change to Link
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300 hidden"
          >
            Guide
          </Link>
          <Link 
            to="/contact" // Change to Link
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FaBars className="text-2xl text-black" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Link 
            to="/" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="/guide" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Guide
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
