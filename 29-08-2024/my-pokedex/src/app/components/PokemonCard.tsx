"use client";

import React from 'react';
import Link from 'next/link';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => {
  return (
    <Link href={`/pokemon/${name}`} className="pokemon-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className="types">
        {types.map((type) => (
          <span key={type} className="type">
            {type}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default PokemonCard;
