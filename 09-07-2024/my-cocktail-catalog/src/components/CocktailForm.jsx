import React, { useState } from 'react';

const CocktailForm = ({ addCocktail }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCocktail = {
      idDrink: Date.now().toString(),
      strDrink: name,
      strCategory: category,
      strInstructions: instructions,
      strDrinkThumb: image
    };
    addCocktail(newCocktail);
    setName('');
    setCategory('');
    setInstructions('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="cocktail-form">
      <input type="text" placeholder="Nome del Cocktail" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <textarea placeholder="Istruzioni" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      <input type="text" placeholder="URL Immagine" value={image} onChange={(e) => setImage(e.target.value)} required />
      <button type="submit">Aggiungi Cocktail</button>
    </form>
  );
};

export default CocktailForm;
