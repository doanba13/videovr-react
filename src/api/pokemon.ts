export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  results: Pokemon[];
}

export const fetchPokemon = async (): Promise<PokemonResponse> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
