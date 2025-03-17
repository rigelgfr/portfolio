// lib/pokemon-service.ts

export interface Pokemon {
    id: number;
    name: string;
    sprite: string;
}
  
export async function getRandomPokemon(): Promise<Pokemon> {
    const randomId = Math.floor(Math.random() * 1025) + 1;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        
        if (!response.ok) {
        throw new Error('Failed to fetch Pokemon');
        }
        
        const data = await response.json();
        
        return {
        id: data.id,
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        sprite: data.sprites.front_default
        };
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        throw error;
    }
}