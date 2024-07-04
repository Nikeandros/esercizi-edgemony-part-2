import React, { useState, useEffect } from 'react';
import ResultDisplay from '../components/ResultDisplay';
import '../components/style.css';

const exchangeRates = {
  '£': 1, // Base currency
  '$': 1.3,
  '€': 1.15,
};

const MortgageCalculator = () => {
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('repayment');
  const [result, setResult] = useState(null);
  const [currency, setCurrency] = useState('£');

  useEffect(() => {
    if (amount && years && rate) {
      handleCalculate();
    }
  }, [amount, years, rate, type, currency]);

  const sanitizeInput = (value) => {
    return value.replace(/,/g, '.').replace(/[^\d.]/g, '');
  };

  const handleCalculate = () => {
    const sanitizedAmount = parseFloat(sanitizeInput(amount));
    const sanitizedYears = parseInt(years);
    const sanitizedRate = parseFloat(sanitizeInput(rate));

    if (isNaN(sanitizedAmount) || isNaN(sanitizedYears) || isNaN(sanitizedRate)) {
      setResult(null);
      return;
    }

    const amountInBaseCurrency = sanitizedAmount / exchangeRates[currency];
    const principal = amountInBaseCurrency;
    const annualInterestRate = sanitizedRate / 100;
    const numberOfPayments = sanitizedYears * 12;

    let monthlyPayment, totalPayment;

    if (type === 'repayment') {
      const monthlyInterestRate = annualInterestRate / 12;
      monthlyPayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      totalPayment = monthlyPayment * numberOfPayments;
    } else {
      monthlyPayment = (principal * annualInterestRate) / 12;
      totalPayment = (monthlyPayment * 12 * sanitizedYears) + principal;
    }

    const monthlyPaymentInSelectedCurrency = (monthlyPayment * exchangeRates[currency]).toFixed(2);
    const totalPaymentInSelectedCurrency = (totalPayment * exchangeRates[currency]).toFixed(2);

    setResult({
      monthlyPayment: monthlyPaymentInSelectedCurrency,
      totalPayment: totalPaymentInSelectedCurrency,
    });
  };

  const handleClear = () => {
    setAmount('');
    setYears('');
    setRate('');
    setType('repayment');
    setResult(null);
  };

  return (
    <div className="calculator">
      <div className="calculator-form">
        <h1 className="title">Mortgage Calculator</h1>
        <button className="clear-btn" onClick={handleClear}>Clear All</button>
        <div className="form-group">
          <label>Mortgage Amount</label>
          <div className="input-group">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9,.]/g, ''))}
            />
            <select className="currency-selector" value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="£">£</option>
              <option value="$">$</option>
              <option value="€">€</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Mortgage Term (years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value.replace(/[^0-9]/g, ''))}
          />
        </div>
        <div className="form-group">
          <label>Interest Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value.replace(/[^0-9.]/g, ''))}
          />
        </div>
        <div className="form-group">
          <label>Mortgage Type</label>
          <div className="radio-group">
            <input type="radio" id="repayment" value="repayment" checked={type === 'repayment'} onChange={(e) => setType(e.target.value)} />
            <label htmlFor="repayment">Repayment</label>
            <input type="radio" id="interest-only" value="interest-only" checked={type === 'interest-only'} onChange={(e) => setType(e.target.value)} />
            <label htmlFor="interest-only">Interest Only</label>
          </div>
        </div>
        <button className="calculate-btn" onClick={handleCalculate}>Calculate Repayments</button>
      </div>
      <ResultDisplay result={result} currency={currency} />
    </div>
  );
};

export default MortgageCalculator;
