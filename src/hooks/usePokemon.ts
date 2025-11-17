import { useQuery } from '@tanstack/react-query';
import { fetchPokemon, type PokemonResponse } from '@/api/pokemon';

export const usePokemon = () => {
  return useQuery<PokemonResponse, Error>({
    queryKey: ['pokemonList'],
    queryFn: fetchPokemon,
  });
};
