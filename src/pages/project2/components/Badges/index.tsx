import React, { useEffect, useState } from "react";

import { AiFillBug, AiFillFire } from 'react-icons/ai'
import { GiFire, GiFluffyWing, GiPoisonBottle, GiPsychicWaves, GiWaterDrop } from 'react-icons/gi'
import { RiPlantFill } from 'react-icons/ri'


import styles from "./styles.module.scss";

import Image from "next/image";
import { randomFill } from "crypto";
import { getImageSize } from "next/dist/server/image-optimizer";

const getPokemonImage = (type, color) => {
  return `https://img.shields.io/badge/-${type}-${color}?logo=react&logoColor=white&style=flat`;
};

function getImage(type) {
  switch (type) {
    case "grass":
      return <RiPlantFill size={20} color="white" />
    case "poison":
      return <GiPoisonBottle size={20} color="white" />
    case "fire":
      return <GiFire size={20} color="white" />
    case "flying":
      return <GiFluffyWing size={20} color="white" />
    case "water":
      return <GiWaterDrop size={20} color="white" />
    case "bug":
      return <AiFillBug size={20} color="white" />
    default:
      return <GiFire size={20} color="white" />
  }
}
export default function Badges(typesProp) {

  const [types, setTypes] = useState([]);

  useEffect(() => {
    console.log(typesProp.types);
    setTypes(typesProp.types);

  }, [typesProp]);

  return (
    <>
      <div className={styles.badges_container}>
        <p className={styles.badgeTitle}><strong>
          Tipo:
        </strong>
        </p>
        {types.map((type) => {
          return (
            <div key={type.type.name} className={styles.badge}>
              {
                getImage(type.type.name)
              }
              <p>
                {type.type.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
