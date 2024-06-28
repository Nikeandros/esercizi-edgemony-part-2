import React, { useState } from 'react';
import Display from '../src/components/Display';
import Keyboard from '../src/components/Keyboard';
import '../src/App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setDisplayValue('');
    } else if (value === "Reset") {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="app">
      <Display value={displayValue} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
