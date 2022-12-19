import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import Image from "next/image";

export default function Badges(typesProp) {

  const [types, setTypes] = useState([]);

  useEffect(() => {
    // console.log(typesProp.types);
    setTypes(typesProp.types);
  }, [typesProp]);

  return (
    <>
      <div className={styles.badges_container}>
        <p className={styles.badgeTitle}>Tipo: </p>
        {types.map((type) => {
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
            <div key={type} className={styles.badge}>
              <Image
                src={`https://img.shields.io/badge/-${type.type.name}-${color}?logo=react&logoColor=white&style=for-the-badge`}
                alt="Pokemon Type"
                width={100}
                height={30}
                
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
