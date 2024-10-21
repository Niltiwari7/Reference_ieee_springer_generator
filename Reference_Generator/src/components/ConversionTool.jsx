import React, { useState } from 'react';
import { CIcon } from '@coreui/icons-react';
import { cilCopy } from '@coreui/icons';

function ConversionTool() {
    const [bibtexInput, setBibtexInput] = useState(''); // State for BibTeX input
    const [outputText, setOutputText] = useState(''); // State for the output text

    // Function to handle the conversion
    const handleConvert = () => {
        // Replace this with actual conversion logic
        setOutputText(bibtexInput); // For now, just echo the input
    };

    // Function to handle copying text to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(outputText) // Copy the output text to clipboard
            .then(() => {
                alert('Text copied to clipboard!'); // Provide feedback to the user
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (

        <div className="bg-gray-200 p-10 rounded-lg shadow-md ">
            <h1 className="text-6xl font-bold text-center mb-6">Conversion Tool</h1>
            <div className="flex">
                {/* BibTeX Input Text Area */}
                <div className="flex-1 bg-white p-10 rounded-lg shadow-md mr-4">
                    <h2 className="text-2xl font-semibold mb-4">BibTeX Input Text Area</h2>
                    <textarea
                        className="w-full h-48 resize-none p-2 border rounded-md"
                        placeholder="Paste your BibTeX code here..."
                        value={bibtexInput} // Bind input value to state
                        onChange={(e) => setBibtexInput(e.target.value)} // Update state on change
                    />
                    <div className="flex justify-between mt-4">
                        <button
                            className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                            onClick={handleConvert} // Add conversion handler
                        >
                            Convert
                        </button>
                        <div className="flex">
                            <select className="w-32 mr-2 border rounded-md">
                                <option value="html">IEEE</option>
                                <option value="json">Springer</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Output Area */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md ml-4">
                    <h2 className="text-lg font-bold mb-2">Output</h2>
                    <textarea
                        className="w-full h-48 resize-none p-2 border rounded-md"
                        readOnly
                        value={outputText} // Set the output text state here
                    />
                    <button
                        className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4"
                        onClick={handleCopy} // Add click event handler for copy
                    >
                        <CIcon icon={cilCopy} className="w-6 h-6 inline-block mr-2" />
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConversionTool;
