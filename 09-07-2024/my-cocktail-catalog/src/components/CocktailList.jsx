import React from 'react';
import CocktailItem from '../components/CocktailItem';

const CocktailList = ({ cocktails, deleteCocktail }) => {
  return (
    <div className="cocktail-list">
      {cocktails.map(cocktail => (
        <CocktailItem key={cocktail.idDrink} cocktail={cocktail} deleteCocktail={deleteCocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
