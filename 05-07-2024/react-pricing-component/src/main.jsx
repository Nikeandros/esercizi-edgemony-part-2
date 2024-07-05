import React from 'react';
import ReactDOM from 'react-dom/client';
import PricingComponent from '../src/components/PricingComponent';
import '../src/index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PricingComponent />
  </React.StrictMode>
);
