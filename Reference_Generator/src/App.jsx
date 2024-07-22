import React, { useRef, useState } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import { convertToBibitem, parseReference } from './Reference_Formater/IEEE';
import Footer from './components/Footer';

export default function App() {
  const headerRef = useRef(null);
  const spanRefs = useRef([]);
  const inputDivRef = useRef(null);
  const [input, setInput] = useState('');
  const [bibitem, setBibitem] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  console.log(input);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(headerRef.current, { duration: 1, y: -50, opacity: 0, ease: 'bounce' })
      .from(spanRefs.current, { duration: 1, y: 50, opacity: 0, stagger: 0.2, ease: 'power3.out' }, "-=0.5")
      .from(inputDivRef.current, { duration: 1, scale: 0.5, opacity: 0, ease: 'elastic.out(1, 0.3)' }, "-=0.5");
  }, []);

  const handleSubmit = () => {
    const reference = parseReference(input);
    const bibitem = convertToBibitem(reference);
    setBibitem(bibitem);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bibitem).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-900 font-inter">
      <header ref={headerRef} className="h-16 bg-blue-900 w-full text-4xl text-center text-white flex items-center justify-center">
        Reference Generator
      </header>
      <div className="flex gap-3 my-4 justify-center">
        {['IEEE', 'Springer'].map((text, index) => (
          <span
            key={text}
            ref={(el) => (spanRefs.current[index] = el)}
            className={`${
              text === 'IEEE' ? 'bg-yellow-500' : 'bg-blue-700'
            } p-3 text-center text-3xl cursor-pointer rounded text-white`}
          >
            {text}
          </span>
        ))}
      </div>
      <div ref={inputDivRef} className="input shadow-lg w-4/5 md:w-1/2 lg:w-1/3 items-center mx-auto my-8 border border-gray-300 p-4 rounded">
        <h1 className="text-center text-3xl pb-2">Input Reference</h1>
        <textarea 
          placeholder="Give your reference" 
          className="h-64 w-full text-center p-2 border resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"  
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={handleSubmit} 
          className="flex mx-auto bg-blue-900 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </div>
      {bibitem && (
        <div className={`w-4/5 md:w-1/2 lg:w-1/3 mx-auto my-8 p-4 border border-gray-300 rounded overflow-auto ${isCopied ? 'bg-green-100' : 'bg-gray-50'}`}>
          <div className="flex justify-between items-center">
            <h2 className="text-center text-3xl pb-2">BibTeX Item</h2>
            <button 
              onClick={handleCopy} 
              className="bg-blue-900 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Copy
            </button>
          </div>
          <pre className="whitespace-pre-wrap break-words">{bibitem}</pre>
        </div>
      )}
      <Footer/>
    </div>
  );
}

