import React, { useRef, useState } from 'react';
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';

export default function App() {
  const headerRef = useRef(null);
  const spanRefs = useRef([]);
  const inputDivRef = useRef(null);
  const [input, setInput] = useState('');
  const [bibitem, setBibitem] = useState('');

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

  return (
    <div className="flex flex-col items-center min-h-screen">
      <header ref={headerRef} className="h-12 bg-blue-500 w-full text-4xl text-center text-pretty text-white ">
        Reference Generator
      </header>
      <div className="flex gap-3 my-4 justify-center">
        {['IEEE', 'Springer'].map((text, index) => (
          <span
            key={text}
            ref={(el) => (spanRefs.current[index] = el)}
            className={`bg-${text === 'IEEE' ? 'yellow-500' : 'blue-600'} p-3 text-center text-3xl cursor-pointer rounded`}
          >
            {text}
          </span>
        ))}
      </div>
      <div ref={inputDivRef} className="input shadow-lg w-[30%] items-center mx-auto my-8 border-black p-4">
        <h1 className="text-center text-3xl pb-2">Input Reference</h1>
        <textarea 
          placeholder="Give your reference" 
          className="h-64 w-full text-center p-2 border resize-none"  
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={handleSubmit} 
          className=" flex mx-auto bg-blue-500 text-white py-2 px-4 rounded "
        >
          Submit
        </button>
      </div>
      {bibitem && (
        <div className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto my-8 p-4 border border-gray-300 rounded overflow-auto">
          <h2 className="text-center  text-3xl pb-2">BibTeX Item</h2>
          <pre className="whitespace-pre-wrap break-words">{bibitem}</pre>
        </div>
      )}
    </div>
  );
}

function parseReference(input) {
  const reference = {};
  const citekeyMatch = input.match(/@.*?\{([^,]+)/);
  reference.citekey = citekeyMatch ? citekeyMatch[1] : '';

  const authorMatch = input.match(/author=\{([^}]+)\}/);
  reference.author = authorMatch ? authorMatch[1] : '';

  const titleMatch = input.match(/title=\{([^}]+)\}/);
  reference.title = titleMatch ? titleMatch[1] : '';

  const journalMatch = input.match(/journal=\{([^}]+)\}/);
  reference.journal = journalMatch ? journalMatch[1] : '';

  const booktitleMatch = input.match(/booktitle=\{([^}]+)\}/);
  reference.booktitle = booktitleMatch ? booktitleMatch[1] : '';

  const volumeMatch = input.match(/volume=\{([^}]+)\}/);
  reference.volume = volumeMatch ? volumeMatch[1] : '';

  const numberMatch = input.match(/number=\{([^}]+)\}/);
  reference.number = numberMatch ? numberMatch[1] : '';

  const pagesMatch = input.match(/pages=\{([^}]+)\}/);
  reference.pages = pagesMatch ? pagesMatch[1] : '';

  const yearMatch = input.match(/year=\{([^}]+)\}/);
  reference.year = yearMatch ? yearMatch[1] : '';

  const publisherMatch = input.match(/publisher=\{([^}]+)\}/);
  reference.publisher = publisherMatch ? publisherMatch[1] : '';

  return reference;
}

function convertToBibitem(reference) {
  let bibitem = `\\bibitem{${reference.citekey}}\n`;
  const authors = reference.author.split(' and ').map(author => author.trim());
  const shortenedAuthors = authors.map(author => {
    let parts = author.replace(/,/g, '').split(' '); 
    let lastName = parts[0];
    let initials = parts.slice(1).map(name => name.charAt(0) + '.').join('');
    return `${lastName}, ${initials}`;
  });

  let authorString = shortenedAuthors.join(', ');
  let lastCommaIndex = authorString.lastIndexOf(',');
  if (lastCommaIndex !== -1) {
    authorString = authorString.slice(0, lastCommaIndex) + ' and' + authorString.slice(lastCommaIndex + 1);
  }

  bibitem += `${authorString}, "${reference.title}", `;

  if (reference.booktitle) {
    bibitem += `in \\textit{${reference.booktitle}}, `;
  } else {
    bibitem += `\\textit{${reference.journal}}, `;
  }

  bibitem += `vol. ${reference.volume}`;

  if (reference.number) {
    bibitem += `, no. ${reference.number}`;
  }

  bibitem += `, pp. ${reference.pages}, ${reference.year}`;

  if (reference.publisher) {
    bibitem += `, ${reference.publisher}`;
  }

  bibitem += '.\n';

  return bibitem;
}
