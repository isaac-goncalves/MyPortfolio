import React, { useEffect, useState } from "react";

import { AiFillBug, AiFillFire } from 'react-icons/ai'
import { GiFire, GiFluffyWing, GiPoisonBottle, GiPsychicWaves, GiWaterDrop } from 'react-icons/gi'
import { RiPlantFill } from 'react-icons/ri'


import styles from "./styles.module.scss";

import Image from "next/image";
import { randomFill } from "crypto";

const getPokemonImage = (type, color) => {
  return `https://img.shields.io/badge/-${type}-${color}?logo=react&logoColor=white&style=flat`;
};

export default function Badges(typesProp) {

  const [types, setTypes] = useState([]);

  useEffect(() => {
    // console.log(typesProp.types);
    setTypes(typesProp.types);
  }, [typesProp]);

  const imagem = types.map((type) => {
    let color = "";
    switch (type.type.name) {
      case "grass":
        color = "green";
        return <RiPlantFill size={20} color={color} />
      case "poison":
        color = "purple";
        return <GiPoisonBottle size={20} color={color} />
      case "fire":
        color = "red";
        return <GiFire size={20} color={color} />
      case "flying":

        color = "blue";
        return <GiFluffyWing size={20} color={color} />
      case "water":
        color = "blue";
        return <GiWaterDrop size={20} color={color} />
      case "bug":
        color = "green";
        return <AiFillBug size={20} color={color} />
      case "normal":
        color = "gray";
        return <AiFillBug size={20} color={color} />
      case "electric":
        color = "yellow";
        return <AiFillBug size={20} color={color} />
      case "ground":
        color = "brown";
        return <AiFillBug size={20} color={color} />
      case "fairy":
        color = "pink";

        return <AiFillBug size={20} color={color} />
      case "fighting":
        color = "brown";
        return <AiFillBug size={20} color={color} />
      case "psychic":
        color = "purple";

        return <GiPsychicWaves size={20} color={color} />
      case "rock":
        color = "brown";
        return <AiFillBug size={20} color={color} />
      case "steel":
        color = "gray";
        return <AiFillBug size={20} color={color} />
      case "ice":
        color = "blue";
        return <AiFillBug size={20} color={color} />
      case "ghost":
        color = "purple";
        return <AiFillBug size={20} color={color} />
      case "dragon":
        color = "red";
        return <AiFillBug size={20} color={color} />
      case "dark":
        color = "black";
        return <AiFillBug size={20} color={color} />
      default:
        color = "gray";
        return <AiFillBug size={20} color={color} />
    }
  })

  return (
    <>
      <div className={styles.badges_container}>
        <p className={styles.badgeTitle}><strong>
          Tipo:
        </strong>
        </p>
        {types.map((type) => {
          let color = "";
          // switch (type.type.name) {
          //   case "grass":
          //     color = "green";
          //     break;
          //   case "poison":
          //     color = "purple";
          //     break;
          //   case "fire":
          //     color = "red";
          //     break;
          //   case "flying":
          //     color = "blue";
          //     break;
          //   case "water":
          //     color = "blue";
          //     break;
          //   case "bug":
          //     color = "green";
          //     break;
          //   case "normal":
          //     color = "gray";
          //     break;
          //   case "electric":
          //     color = "yellow";
          //     break;
          //   case "ground":
          //     color = "brown";
          //     break;
          //   case "fairy":
          //     color = "pink";
          //     break;
          //   case "fighting":
          //     color = "brown";
          //     break;
          //   case "psychic":
          //     color = "purple";
          //     break;
          //   case "rock":
          //     color = "brown";
          //     break;
          //   case "steel":
          //     color = "gray";
          //     break;
          //   case "ice":
          //     color = "blue";
          //     break;
          //   case "ghost":
          //     color = "purple";
          //     break;
          //   case "dragon":
          //     color = "red";
          //     break;
          //   case "dark":
          //     color = "black";
          //     break;
          //   default:
          //     color = "gray";
          // }
          return (
            <div key={type.type.name} className={styles.badge}>
              {
                imagem
              }
              <p>
                {type.type.name}
                <GiFire />
              <GiFluffyWing />
              <AiFillFire />
              <GiPoisonBottle />
              <RiPlantFill />
              <AiFillBug/>
              <GiPsychicWaves/></p>
            </div>
          );
        })}
      </div>
    </>
  );
}
