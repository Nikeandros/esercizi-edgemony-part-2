
import React, { useState } from 'react';
import styles from '../components/Advice.module.css';
import dividerIcon from '../assets/pattern-divider-desktop.svg'; 
import diceIcon from '../assets/icon-dice.svg'; 

const adviceList = [
  "Once you find a really good friend don't do anything that could mess up your friendship.",
  "If you are feeling down, try holding a pencil between your top lip and your nose for five minutes.",
  "Don't always rely on your comforts.",
  "Drink a glass of water before meals.",
  "Everything matters, but nothing matters that much.",
  "Bruh.",
  "Fortis fortunae iuvat",
  "Baila, baila a ritmo vuelta!",
];

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(1);

  const generateAdvice = () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    setAdvice(adviceList[randomIndex]);
    setAdviceNumber(randomIndex + 1); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Advice #{adviceNumber}</h1>
        <p className={styles.advice}>"{advice}"</p>
        <img src={dividerIcon} alt="Divider" className={styles.divider} /> {/* Divider image */}
        <button className={styles.button} onClick={generateAdvice}>
          <img src={diceIcon} alt="Dice Icon" />
        </button>
      </div>
    </div>
  );
};

export default Advice;
