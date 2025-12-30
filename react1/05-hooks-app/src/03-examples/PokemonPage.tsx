import { useCounter } from "../hooks/03-useCounter";
import { usePokemon } from "../hooks/03-usePokemon";

export const PokemonPage = () => {
  const { counter, increment, decrement } = useCounter();
  const { pokemon, isLoading, formattedID } = usePokemon({ id: counter });
  if (isLoading) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <p>Cargando...</p>;
      </div>
    );
  }
  if (pokemon === null) {
    return <p>Pokemon no encontrado...</p>;
  }
  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>

      <h3 className="text-xl font-bold text-white">
        #{formattedID} {pokemon.name}
      </h3>
      <img src={pokemon.imageUrl} alt={`${pokemon.name} image`} />

      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={decrement}
        >
          Anterior
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={increment}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
