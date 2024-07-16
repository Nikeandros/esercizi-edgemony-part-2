import React, { useEffect, useState } from 'react';
import logo from './assets/Helldivers-2-PNG-1.png'
const App = () => {
  const [data, setData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [counter, setCounter] = useState(0);

  
  useEffect(() => {
    console.log("Chiamata API al primo render");
    
    setTimeout(() => {
      setData("Dati caricati!");
      console.log("Dati caricati con successo");
    }, 1000);
  }, []);

  
  useEffect(() => {
    console.log("Chiamata API e aggiornamento di localStorage");
    const storedData = localStorage.getItem('dataKey');
    if (storedData) {
      setLocalData(JSON.parse(storedData));
      console.log("Dati recuperati dal localStorage:", storedData);
    } else {
      const newData = { message: "Dati dal server" };
      localStorage.setItem('dataKey', JSON.stringify(newData));
      setLocalData(newData);
      console.log("Dati salvati nel localStorage:", newData);
    }
  }, []);

  
  useEffect(() => {
    console.log("Il counter è stato aggiornato:", counter);
  }, [counter]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <img src={logo} alt="Logo" className="w-50 h-48 mb-6  transform transition-transform duration-500 hover:scale-110" />
      <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Democratic useEffect
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-xl mb-4">
        <p className="text-gray-800 text-lg">{data || "Caricamento dati..."}</p>
        <p className="text-gray-600">{localData ? localData.message : "Nessun dato disponibile."}</p>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95"
        onClick={() => setCounter(counter + 1)}
      >
        Release Democracy
      </button>
      <p className="mt-4 text-white text-lg">Counter: {counter}</p>
    </div>
  );
};

export default App;
