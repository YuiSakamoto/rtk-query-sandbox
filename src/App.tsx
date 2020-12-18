import React from "react";
import "./App.css";
import { Pokemon, pokemons } from "./Component/Pokemon";

const App: React.FC = () => {
  return (
    <div className="App">
      {pokemons.map((pokemonName, k) => (
        <Pokemon key={k} name={pokemonName} />
      ))}
    </div>
  );
};
export default App;
