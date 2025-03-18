import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

interface PokemonSprites {
  versions: {
    'generation-v': {
      'black-white': {
        animated: {
          front_default: string;
        };
      };
    };
  };
}

interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
}

export const usePokeApi = () => {
  const [randomId, setRandomId] = useState<number>(0);
  
  useEffect(() => {
    setRandomId(Math.floor(Math.random() * 649) + 1);
  }, []);
  
  return useQuery<Pokemon>({
    queryKey: ['pokemon', randomId],
    queryFn: async () => {
      if (randomId === 0) return null;
      
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokemon');
      }
      return response.json();
    },
    enabled: randomId > 0,
  });
};