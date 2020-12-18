import React from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";

export const pokemons = [
  "bulbasaur",
  "pikachu",
  "ditto",
  "bulbasaur",
  "ditto",
  "pikachu",
] as const;
interface Props {
  key: number;
  name: typeof pokemons[number];
}
export const Pokemon: React.FC<Props> = ({ key, name }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  return (
    <>
      {error ? (
        <>Error occurred!!</>
      ) : isLoading ? (
        <>Wait a moment...</>
      ) : data ? (
        <div key={key}>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </div>
      ) : null}
    </>
  );
};
