import React, { useState, useEffect } from "react";

import Badges from "../Badges";
import styles from "./styles.module.scss";

function DetailsPart(url) {
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonWeight, setPokemonWeight] = useState([]);
  const [pokemonHeight, setPokemonHeight] = useState([]);
  const [pokemonExperience, setPokemonExperience] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    // console.log(url);
    fetch(url.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonTypes(data.types);
        setPokemonAbilities(data.abilities);
        setPokemonWeight(data.weight);
        setPokemonHeight(data.height);
        setPokemonExperience(data.base_experience);
        // console.log(data.types);
      });
  }, [url]);
  return (
    <>
      <div>
        <p>
          <strong>Peso: </strong>
          {pokemonWeight / 10 + " kg"}
        </p>
        <p>
          <strong>Altura: </strong>
          {pokemonHeight / 10 + " m"}
        </p>
        <p>
          <strong>Experiência: </strong>
          {pokemonExperience + " xp"}
        </p>
        <p>
          <strong>Habilidades: </strong>
          {pokemonAbilities.map((pokemonAbility) => {
            return (
              <p className={styles.habilities}>{pokemonAbility.ability.name}</p>
            );
          })}
        </p>
        <Badges types={pokemonTypes}/>
      </div>
    </>
  );
}

export default DetailsPart;
