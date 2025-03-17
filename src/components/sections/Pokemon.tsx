// components/ui/PokemonWatcher.tsx
"use client"

import { useState, useEffect, useRef } from 'react';
import { getRandomPokemon, Pokemon } from '@/lib/pokeapi';

export function PokemonWatcher() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fetchingRef = useRef(false);

  useEffect(() => {
    // Prevent multiple concurrent fetches
    if (fetchingRef.current) return;
    
    const fetchPokemon = async () => {
      try {
        fetchingRef.current = true;
        const data = await getRandomPokemon();
        setPokemon(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch Pokemon');
        console.error(err);
      } finally {
        fetchingRef.current = false;
      }
    };

    fetchPokemon();
    
    // Clean up function
    return () => {
      fetchingRef.current = false;
    };
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-red-500">{error}</p>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {pokemon && (
        <>
          <img 
            src={pokemon.sprite} 
            alt={pokemon.name} 
            className="w-64 h-64 object-contain"
          />
          <p className="mt-4 text-xl font-medium">{pokemon.name} is watching your visit.</p>
        </>
      )}
    </div>
  );
}