import { useEffect, useState } from "react";

type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
};

type Props = {
  id: number;
};
export function usePokemon({ id }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonById = async (id: number) => {
    setIsLoading(true);
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await result.json();

    setPokemon({
      id: id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    pokemon,
    isLoading,
    formattedID: pokemon?.id.toString().padStart(3, "0"),
  };
}
