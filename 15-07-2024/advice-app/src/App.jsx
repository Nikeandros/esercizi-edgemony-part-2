import React, { useState, useEffect } from 'react';
import axios from 'axios';
import diceIcon from './assets/icon-dice.svg';
import dividerIcon from './assets/pattern-divider-desktop.svg';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [adviceNumber, setAdviceNumber] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
      setAdviceNumber(response.data.slip.id);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto relative">
        <p className="text-green-400 uppercase mb-4 tracking-wider">Advice #{adviceNumber}</p>
        <blockquote className="text-xl font-semibold mb-6">
          "{advice}"
        </blockquote>
        <img src={dividerIcon} alt="Pattern Divider" className="mx-auto mb-6" />
        <div className="flex justify-center mt-4">
          <button onClick={fetchAdvice} className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full">
            <img src={diceIcon} alt="Get New Advice" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
