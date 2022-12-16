import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import Image from "next/image";

const getPokemonImage = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Project2() {
  const [pokemons, setPokemons] = useState([]);
  //   const [teste, setTeste] = useState("3");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemons(data.results);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Pokedex</h1>
        <div className={styles.cardContainer}>
          {pokemons.map((pokemon) => {
            return (
              <div className={styles.card} key={pokemon.name}>
                <h1 className={styles.cardTitle}>
                  {" "}
                  {capitalizeFirstLetter(pokemon.name)}
                </h1>
                <div className={styles.image}>
                  <Image
                    width={200}
                    height={200}
                    src={getPokemonImage(
                      pokemon.url.split("/")[pokemon.url.split("/").length - 2]
                    )}
                    alt={pokemon.name}
                  />
                </div>
                <div className={styles.roudedCard}>
                  <p>Peso: </p>
                  <p></p>
                  <p>teste</p>
                  <p>Tipo</p>
                  <div className={styles.badges_container}>
                    <img
                      className={styles.badge}
                      src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge"
                    />
                    <img
                      className={styles.badge}
                      src="https://img.shields.io/badge/-Axios-E6E6FA?logo=axios&logoColor=black&style=for-the-badge"
                    />
                    <img
                      className={styles.badge}
                      src="https://img.shields.io/badge/-Saas-Bf4080?logo=sass&logoColor=white&style=for-the-badge"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
