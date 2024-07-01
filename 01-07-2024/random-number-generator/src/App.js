import React, { useState } from 'react';
import '../src/App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generatore di Numeri Randomici</h1>
        <button className="random-button" onClick={generateRandomNumber}>Genera Numero</button>
        {randomNumber !== null && <p className="random-display">Numero Generato: {randomNumber}</p>}
      </header>
    </div>
  );
}

export default App;
