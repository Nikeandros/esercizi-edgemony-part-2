import React, { useState } from 'react';
import '../src/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Personalizzato</h1>
        <div className="counter-container">
          <button className="counter-button" onClick={() => setCount(count - 1)}>-</button>
          <span className="counter-display">{count}</span>
          <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
