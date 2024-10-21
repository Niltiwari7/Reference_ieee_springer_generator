import React from 'react';

function Header() {
  return (
    <div className="bg-white shadow-md">
      <div className="h-20 w-full flex justify-between items-center p-8">
        <div className="left">
          <span className="text-3xl font-bold text-black">AutoBib</span>
        </div>
        <div className="right flex gap-6">
          <a 
            href="#home" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
          >
            About
          </a>
          <a 
            href="#guide" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Guide
          </a>
          <a 
            href="#contact" 
            className="text-lg font-black text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
