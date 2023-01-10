import React, { useState, useEffect } from "react";

import { Progress } from "react-sweet-progress";

import Badges from "../Badges";

import "react-sweet-progress/lib/style.css";

import styles from "./styles.module.scss";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function DetailsPart(url) {
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonWeight, setPokemonWeight] = useState([]);
  const [pokemonHeight, setPokemonHeight] = useState([]);
  const [pokemonExperience, setPokemonExperience] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log(url);
    fetch(url.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonAbilities(data.abilities);
        setPokemonWeight(data.weight);
        setPokemonHeight(data.height);
        setPokemonExperience(data.base_experience);
        setPokemonTypes(data.types);
        setPokemonStats(data.stats);
        // console.log(data.abilities);edx8n
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.progressContainer}>
          <p className={styles.progressTitle}>HP</p>
          <Progress
            className={styles.progressBar}
            theme={{
              active: {
                symbol: String(pokemonStats[0].base_stat),
                color: "rgb(143 53 53)",
              },
            }}
            percent={(pokemonStats[0].base_stat * 100) / 251}
            style={{ color: "#FFF" }}
          />
        </div>
        <div className={styles.progressContainer}>
          <p className={styles.progressTitle}>ATK</p>
          <Progress
            className={styles.progressBar}
            theme={{
              active: {
                symbol: String(pokemonStats[1].base_stat),
                color: "rgb(254,167,37)",
              },
            }}
            percent={(pokemonStats[1].base_stat * 100) / 135}
          />
        </div>
        <div className={styles.progressContainer}>
          <p className={styles.progressTitle}>DEF</p>
          <Progress
            className={styles.progressBar}
            theme={{
              active: {
                symbol: String(pokemonStats[2].base_stat),
                color: "rgb(3,145,238)",
              },
            }}
            percent={(pokemonStats[2].base_stat * 100) / 161}
          />
        </div>
        <div className={styles.progressContainer}>
          <p className={styles.progressTitle}>SPD</p>
          <Progress
            className={styles.progressBar}
            theme={{
              active: {
                symbol: String(pokemonStats[3].base_stat),
                color: "rgb(144,175,197)",
              },
            }}
            percent={(pokemonStats[3].base_stat * 100) / 155}
          />
        </div>
      </div>
      <div className={styles.detailsWrapper}>
        <div>
          <p>
            <strong>Peso: </strong>
            {pokemonWeight / 10 + "Kg"}
          </p>
          <p>
            <strong>Altura: </strong>
            {pokemonHeight / 10 + "m"}
          </p>
          <p>
            <strong>Experiência: </strong>
            {pokemonExperience + " XP"}
          </p>
        </div>
        <div>
          <p>
            <strong>Habilidades: </strong>
            {pokemonAbilities.map((pokemonAbility) => {
              return (
                <p key={pokemonAbility} className={styles.habilities}>{capitalizeFirstLetter(pokemonAbility.ability.name)}</p>
              );
            })}
          </p>
        </div>
      </div>
      <Badges types={pokemonTypes} />
    </div>
  );
}

export default DetailsPart;
