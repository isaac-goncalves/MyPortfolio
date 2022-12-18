import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import Image from "next/image";
import internal from "stream";

const getPokemonImage = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const capitalizeFirstLetter = (string): any => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// const getPokemonabilities = async (name) => {
//   // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//   // const data = await response.json();
//   // console.log(data.abilities);
//   // const abilities = data.abilities.map((ability) => {
//   //   return <p>{ability.ability.name}</p>;
//   // });
//   return <p>teste</p>;
// };

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
                  <p>
                    <strong>Peso:</strong> 10kg
                  </p>
                  <p>
                    <strong>Altura:</strong> 1.6m
                  </p>
                  <p>
                    <strong>Experiência:</strong> 2600xp
                  </p>
                  <p>
                    <strong>Habilidades:</strong>
                    {/* {getPokemonabilities(pokemon.name)} */}
                  </p>
                  <div className={styles.badges_container}>
                    <p className={styles.badgeTitle}>Tipo:</p>
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
