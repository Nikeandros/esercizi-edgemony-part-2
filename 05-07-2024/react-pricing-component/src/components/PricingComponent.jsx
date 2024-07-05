import React, { useState } from 'react';
import '../components/PricingComponent.css';

const PricingComponent = () => {
  const [pageviews, setPageviews] = useState(100000);
  const [billing, setBilling] = useState(false);

  const handleRangeChange = (event) => {
    setPageviews(event.target.value);
  };

  const handleBillingChange = () => {
    setBilling(!billing);
  };

  const calculatePrice = () => {
    let price = (pageviews / 1000) * 0.16;
    if (billing) {
      price *= 0.75;
    }
    return price.toFixed(2);
  };

  return (
    <div className="container">
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required</p>
      <div className="card">
        <div className="range-input">
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={pageviews}
            onChange={handleRangeChange}
          />
        </div>
        <p>{pageviews.toLocaleString()} PAGEVIEWS</p>
        <h2>${calculatePrice()} / month</h2>
        <div className="billing-toggle">
          <label>
            <input
              type="checkbox"
              checked={billing}
              onChange={handleBillingChange}
            />
            Yearly Billing (25% discount)
          </label>
        </div>
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button>Start my trial</button>
      </div>
    </div>
  );
};

export default PricingComponent;
