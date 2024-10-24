import React, { useEffect, useRef } from 'react';


const steps = [
  {
    title: 'Step 1: Input Your Reference',
    description: 'Paste your BibTeX code into the input area on our tool.',
  },
  {
    title: 'Step 2: Choose Output Format',
    description: 'Select your desired output format (IEEE, Springer, etc.).',
  },
  {
    title: 'Step 3: Convert Your Reference',
    description: 'Click the "Convert" button to generate the formatted reference.',
  },
  {
    title: 'Step 4: Copy Your Output',
    description: 'Use the "Copy" button to copy your newly formatted reference.',
  },
];

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">How It Works</h2>
      <div>
        {steps.map((step, index) => (
          <div
            key={index}
            className="mb-6 p-4  rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-black">{step.title}</h3>
            <p className="text-black">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
