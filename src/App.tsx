import { PokemonList } from './components/PokemonList';
import './App.css'; // Keep the CSS import for global styles

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <PokemonList />
    </div>
  );
}

export default App;
