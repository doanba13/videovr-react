import { usePokemon } from '@/hooks/usePokemon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PokemonList() {
  const { data, error, isLoading } = usePokemon();

  if (isLoading) {
    return <div className="text-center p-4">Loading Pokemon...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.results.map((pokemon) => (
          <Card key={pokemon.name} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="capitalize">{pokemon.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* You can add more details here, e.g., an image */}
              <p>Click to see details (not implemented)</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
