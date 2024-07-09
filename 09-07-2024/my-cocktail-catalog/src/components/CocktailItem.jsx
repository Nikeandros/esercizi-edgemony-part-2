import React from 'react';

const CocktailItem = ({ cocktail, deleteCocktail }) => {
  return (
    <div className="cocktail-item">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h2>{cocktail.strDrink}</h2>
      <p>{cocktail.strCategory}</p>
      <p>{cocktail.strInstructions}</p>
      <button onClick={() => deleteCocktail(cocktail.idDrink)}>Elimina</button>
    </div>
  );
};

export default CocktailItem;
