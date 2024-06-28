import React from 'react';
import '../components/Display.css';

const Display = ({ value }) => {
  return (
    <div className="display">
      {value}
    </div>
  );
};

export default Display;
