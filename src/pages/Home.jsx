import React, { useRef } from 'react';
import Hero from '../components/Hero';
import ConversionTool from '../components/ConversionTool';

function Home() {
    // Create a reference for ConversionTool
    const conversionToolRef = useRef(null);

    // Scroll to the ConversionTool section when the button is clicked
    const scrollToConversionTool = () => {
        conversionToolRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="p-5 w-full"></div>
            {/* Pass scroll function to Hero */}
            <Hero onGetStartedClick={scrollToConversionTool} />
            <div className="p-10 w-full"></div>
            {/* Add the ref to ConversionTool */}
            <div ref={conversionToolRef}>
                <ConversionTool />
            </div>
            <div className='p-10'></div>
        </div>
    );
}

export default Home;
