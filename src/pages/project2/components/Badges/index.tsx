import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import Image from "next/image";
import { randomFill } from "crypto";

const getPokemonImage = (type, color) => {
  return `https://img.shields.io/badge/-${type}-${color}?logo=react&logoColor=white&style=flat`;
};

export default function Badges(typesProp) {

  useEffect(() => {

    console.log("testado")
    console.log(typesProp)

  }, [])

  return (
    <>
      <div className={styles.badges_container}>
        <p className={styles.badgeTitle}><strong>
          Tipo:
        </strong>
        </p>
        {typesProp.types.map((type) => {
          let color = "";
          switch (type.type.name) {
            case "grass":
              color = "green";
              break;
            case "poison":
              color = "purple";
              break;
            case "fire":
              color = "red";
              break;
            case "flying":
              color = "blue";
              break;
            case "water":
              color = "blue";
              break;
            case "bug":
              color = "green";
              break;
            case "normal":
              color = "gray";
              break;
            case "electric":
              color = "yellow";
              break;
            case "ground":
              color = "brown";
              break;
            case "fairy":
              color = "pink";
              break;
            case "fighting":
              color = "brown";
              break;
            case "psychic":
              color = "purple";
              break;
            case "rock":
              color = "brown";
              break;
            case "steel":
              color = "gray";
              break;
            case "ice":
              color = "blue";
              break;
            case "ghost":
              color = "purple";
              break;
            case "dragon":
              color = "red";
              break;
            case "dark":
              color = "black";
              break;
            default:
              color = "gray";
          }
          return (
            <div key={type.type.url} className={styles.badge}>
              <Image
                src={getPokemonImage(type.type.name, color)}
                alt="Pokemon Type"
                width={80}
                height={28}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
