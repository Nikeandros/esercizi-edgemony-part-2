import React from 'react';
import Button from './Button';
import '../components/Keyboard.css';

const buttonValues = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "Reset", 0, ".", "="];

const Keyboard = ({ onButtonClick }) => {
  return (
    <div className="keyboard">
      {buttonValues.map((value, index) => (
        <Button key={index} label={value} onClick={onButtonClick} />
      ))}
    </div>
  );
};

export default Keyboard;
