import React, { useState } from 'react';
import { CIcon } from '@coreui/icons-react';
import { cilCopy } from '@coreui/icons';
import { convertToBibitem, parseReference } from '../Reference_Formater/IEEE.js';
import { convertToSpringerBibitem, parseReference1 } from '../Reference_Formater/Springer.js';

function ConversionTool() {
    const [bibtexInput, setBibtexInput] = useState(''); 
    const [outputText, setOutputText] = useState(''); 
    const [format, setFormat] = useState('IEEE'); 
    const [isCopied, setIsCopied] = useState(false); // Feedback for copy action
    const [error, setError] = useState(''); // Error handling

    const handleConvert = () => {
        try {
            if (!bibtexInput.trim()) {
                setError('Please enter a valid BibTeX input.');
                return;
            }
            setError(''); // Clear any previous errors

            const reference = format === 'IEEE' ? parseReference(bibtexInput) : parseReference1(bibtexInput);

            let bibitem;
            if (format === 'IEEE') {
                bibitem = convertToBibitem(reference); 
            } else if (format === 'Springer') {
                bibitem = convertToSpringerBibitem(reference); 
            }

            setOutputText(bibitem);
        } catch (error) {
            setOutputText('');
            setError('Invalid BibTeX format or parsing error.');
        }
    };

    const handleCopy = () => {
        if (!outputText.trim()) {
            alert('Nothing to copy!');
            return;
        }
        navigator.clipboard.writeText(outputText)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Reset copy feedback after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className="bg-gray-200 p-6 md:p-10 rounded-lg shadow-md">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Conversion Tool</h1>
            
            <div className="flex flex-col md:flex-row">
                {/* BibTeX Input Text Area */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md mb-6 md:mr-4">
                    <h2 className="text-2xl font-semibold mb-4">BibTeX Input</h2>
                    <textarea
                        className="w-full h-48 resize-none p-2 border rounded-md"
                        placeholder="Paste your BibTeX code here..."
                        value={bibtexInput}
                        onChange={(e) => setBibtexInput(e.target.value)}
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    
                    <div className="flex justify-between mt-4">
                        <button
                            className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                            onClick={handleConvert}
                        >
                            Convert
                        </button>
                        <div className="flex">
                            <select
                                className="w-32 mr-2 border rounded-md"
                                value={format}
                                onChange={(e) => setFormat(e.target.value)} 
                            >
                                <option value="IEEE">IEEE</option>
                                <option value="Springer">Springer</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Output Area */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md md:ml-4">
                    <h2 className="text-lg font-bold mb-2">Output</h2>
                    <textarea
                        className="w-full h-48 resize-none p-2 border rounded-md"
                        readOnly
                        value={outputText}
                    />
                    <button
                        className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4"
                        onClick={handleCopy}
                    >
                        <CIcon icon={cilCopy} className="w-6 h-6 inline-block mr-2" />
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConversionTool;
