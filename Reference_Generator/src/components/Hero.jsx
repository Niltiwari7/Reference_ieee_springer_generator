import React from 'react';
import Work from './Work';

function Hero({ onGetStartedClick }) {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
            {/* Left Section */}
            <div className="flex flex-col justify-center max-w-lg mb-8 md:mb-0 md:pl-8">
                <div className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                    Automate BibTeX Conversion
                </div>
                <div className="text-xl md:text-2xl text-gray-600 mb-8">
                    Simplify your reference
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <button
                        onClick={onGetStartedClick} // Trigger scroll on click
                        className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-500 transition duration-300 text-center"
                    >
                        Get Started
                    </button>
                    <a
                        href="#watch-demo"
                        className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-500 transition duration-300 text-center"
                    >
                        Watch Demo
                    </a>
                </div>
            </div>

            {/* Work Section */}
            <div className="flex-grow">
                <Work />
            </div>
        </div>
    );
}

export default Hero;
