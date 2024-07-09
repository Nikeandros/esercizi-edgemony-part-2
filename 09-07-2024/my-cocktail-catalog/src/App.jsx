import React, { useState, useEffect } from 'react';
import CocktailForm from './components/CocktailForm';
import CocktailList from './components/CocktailList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      let allCocktails = [];
      const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
      for (let letter of letters) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        const data = await response.json();
        if (data.drinks) {
          allCocktails = [...allCocktails, ...data.drinks];
        }
      }
      setCocktails(allCocktails);
      setLoading(false);
    };
    fetchCocktails();
  }, []);

  const addCocktail = (cocktail) => {
    setCocktails([...cocktails, cocktail]);
  };

  const deleteCocktail = (id) => {
    setCocktails(cocktails.filter(cocktail => cocktail.idDrink !== id));
  };

  const filteredCocktails = cocktails.filter(cocktail =>
    cocktail.strDrink.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Catalogo di Cocktails</h1>
        <div className="form-container">
          <CocktailForm addCocktail={addCocktail} />
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </header>
      <main className="main-content">
        {loading ? <p>Caricamento...</p> : <CocktailList cocktails={filteredCocktails} deleteCocktail={deleteCocktail} />}
      </main>
    </div>
  );
};

export default App;
