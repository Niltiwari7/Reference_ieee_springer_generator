import React from 'react';
function Hero() {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-between p-10">
            {/* Left Section */}
            <div className="left flex flex-col justify-center max-w-lg pl-8">
                <div className="text-6xl font-bold text-gray-800 mb-4">
                    Automate BibTeX Conversion
                </div>
                <div className="text-2xl text-gray-600 mb-8">
                    Simplify your reference
                </div>
                <div className="flex gap-4">
                    <a
                        href="#get-started"
                        className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-500 transition duration-300"
                    >
                        Get Started
                    </a>
                    <a
                        href="#watch-demo"
                        className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-500 transition duration-300"
                    >
                        Watch Demo
                    </a>
                </div>
            </div>

            {/* Right Section */}
            <div className="right hidden md:flex items-center justify-center">
                <div className="relative w-[680px] h-[580px] bg-white border border-purple-500 rounded-md shadow-lg flex items-center justify-center">
                    <div className="absolute top-4 left-4">
                        <span className="text-gray-400 font-bold">ooo</span>
                    </div>

                    <div className="absolute inset-0 rounded-full border border-blue-200 animate-pulse" />
                </div>
            </div>
        </div>



    );
}

export default Hero;
