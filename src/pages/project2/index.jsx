import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import Image from "next/image";

import DetailsPart from "./components/Details";

const getPokemonImage = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Project2() {
  const [pokemons, setPokemons] = useState([]);
  const test = ["teste", "teste2", "teste3"];
  const [search, setSearch] = useState("");
  //   const [teste, setTeste] = useState("3");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPokemons(data.results);
      });
  }, []);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Pokedex</h1>
        <input
          onChange={handleChange}
          type="text"
          value={search} />
        <div className={styles.cardContainer}>
          {
            pokemons.filter((pokemon) => {
              if (search === "") {
                return pokemon;
              } else if (
                pokemon.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return pokemon;
              }
            }).map((pokemon) => {
              return (
                <div className={styles.card} key={pokemon.name}>
                  <h1 className={styles.cardTitle}>
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
                    <DetailsPart url={pokemon.url} />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  );
}

