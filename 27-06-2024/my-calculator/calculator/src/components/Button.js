import React from 'react';
import '../components/Button.css';

const Button = ({ label, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
