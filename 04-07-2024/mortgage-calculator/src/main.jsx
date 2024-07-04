import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/components/style.css';
import MortgageCalculator from '../src/components/MortgageCalculator';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MortgageCalculator />
  </React.StrictMode>
);
