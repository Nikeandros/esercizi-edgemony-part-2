import React, { useState } from 'react';

const AddPokemon = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Puoi aggiungere qui la logica per salvare i dati
    setMessage(`Pokémon ${name} di tipo ${type} aggiunto ai preferiti!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add Pokémon</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Pokémon Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-lg font-medium mb-2">
            Pokémon Type:
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Add Pokémon
        </button>
      </form>
      {message && (
        <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded">
          {message}
        </div>
      )}
    </div>
  );
};

export default AddPokemon;
