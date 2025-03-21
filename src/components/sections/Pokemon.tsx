import { usePokeApi } from "@/hooks/usePokeApi";

const PokemonWatcher = () => {
  const { data: pokemon, isLoading, isError } = usePokeApi();
  
  if (isLoading) return <div className="flex justify-center items-center h-32">Loading Pokemon...</div>;
  
  if (isError) return <div className="text-red-500">Error fetching Pokemon</div>;
  
  if (!pokemon) return null;
  
  const spriteUrl = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
  
  return (
    <div className="flex flex-col items-center p-4">
      {spriteUrl ? (
        <img 
          src={spriteUrl} 
          alt={`${pokemon.name} sprite`} 
          className="lg:w-1/2 md:w-1/4 object-contain select-none"
        />
      ) : (
        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
          No sprite
        </div>
      )}
      <p className="mt-2 text-center font-medium">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} is watching your visit.
      </p>
    </div>
  );
};

export default PokemonWatcher;