import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const totalCharacters = text.length;
  const charactersExcludingSpaces = text.replace(/\s+/g, '').length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-teal-700 p-8 rounded-lg text-white">
        <h1 className="text-2xl font-bold mb-4">Conta Caratteri</h1>
        <textarea
          className="w-full h-40 p-4 rounded-lg text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Scrivi o incolla qui il testo"
        />
        <div className="mt-4">
          <p>Caratteri: {totalCharacters}</p>
          <p>Caratteri (spazi esclusi): {charactersExcludingSpaces}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
