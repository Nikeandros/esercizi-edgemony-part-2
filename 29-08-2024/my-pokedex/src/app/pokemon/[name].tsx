import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

interface PokemonDetailProps {
  pokemon: {
    name: string;
    sprites: {
      front_default: string;
    };
    types: {
      type: {
        name: string;
      };
    }[];
    height: number;
    weight: number;
  };
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">
        {pokemon.name}
      </h1>
      <div className="flex flex-col items-center">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Types:</h2>
          <div className="flex space-x-2 mt-2">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Height:</h2>
          <p>{pokemon.height / 10} m</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Weight:</h2>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();

  const paths = data.results.map((pokemon: { name: string }) => ({
    params: { name: pokemon.name },
  }));

  return {
    paths,
    fallback: true, // or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.name}`);
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonDetail;
