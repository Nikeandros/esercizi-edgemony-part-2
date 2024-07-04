import React from 'react';
import '../components/style.css';

const ResultDisplay = ({ result, currency }) => {
  return (
    <div className="result-display">
      {result ? (
        <>
          <p className="monthly-repayments">Your monthly repayments: <span className="amount">{currency}{result.monthlyPayment}</span></p>
          <p className="total-repay">Total you'll repay over the term: <span className="total">{currency}{result.totalPayment}</span></p>
        </>
      ) : (
        <p>Results shown here</p>
      )}
    </div>
  );
};

export default ResultDisplay;
