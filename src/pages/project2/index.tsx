import React, { useEffect, useState } from 'react'

import styles from "./styles.module.scss";




export default function index() {

    const [pokemons, setPokemons] = useState([])
    const [teste, setTeste] = useState('3')


    const getPokemonImage = (id) => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPokemons(data.results)
            }
            )

    }, [])

    return (

        <div className={styles.container}>
            <h1 className={styles.title}>Pokedex</h1>
            <div className={styles.cardContainer}>
                {
                    pokemons.map(pokemon => {
                        return (
                            <div className={styles.card} key={pokemon.name}>
                                <h1 className={styles.cardTitle}> {capitalizeFirstLetter(pokemon.name)}</h1>
                                <img className={styles.image} src={getPokemonImage(
                                    pokemon.url.split('/')[pokemon.url.split('/').length - 2]
                                )} alt="" />
                                <p>
                                    teste
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
