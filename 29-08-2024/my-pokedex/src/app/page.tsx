"use client";

import { useEffect, useState } from 'react';
import PokemonCard from '../app/components/PokemonCard';
import SearchBar from '../app/components/SearchBar';
import Filter from '../app/components/Filter';
import Link from 'next/link';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const pokemonDetails: PokemonData[] = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );
      setPokemonList(pokemonDetails);
      setFilteredPokemon(pokemonDetails);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const results = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPokemon(results);
  }, [searchQuery, pokemonList]);

  useEffect(() => {
    if (selectedType) {
      const results = pokemonList.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name === selectedType)
      );
      setFilteredPokemon(results);
    } else {
      setFilteredPokemon(pokemonList);
    }
  }, [selectedType, pokemonList]);

  const pokemonTypes: string[] = [
    'grass', 'fire', 'water', 'bug', 'normal', 'poison', 'electric', 'ground',
    'fairy', 'fighting', 'psychic', 'rock', 'ghost', 'ice', 'dragon', 'dark',
    'steel', 'flying'
  ];

  return (
    <div className="container mx-auto p-4">
      <header>
        <h1>Pokédex</h1>
      </header>
      <div className="text-center mb-8">
        <Link href="/add-pokemon" className="add-pokemon-button">
          Add Pokémon
        </Link>
      </div>
      <SearchBar onSearch={setSearchQuery} />
      <Filter types={pokemonTypes} onFilter={setSelectedType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types.map((type) => type.type.name)}
          />
        ))}
      </div>
    </div>
  );
}
