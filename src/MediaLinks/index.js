import React from 'react'

import styles from "./styles.module.scss";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function MediaLinks() {
  return (
    <>
      <div className={styles.icon}>
       <a href='https://www.linkedin.com/in/isaac-correia-gon%C3%A7alves-4a7375138/'>
         <BsLinkedin color="rgb(100, 255, 218)" size={40} />
        </a>
        <a href='https://github.com/isaac-goncalves'>
        <BsGithub color="rgb(100, 255, 218)" size={40} />
        </a>
      </div>
      <a className={styles.mailAddress}>isaac.correia.2406@gmail.com</a>
    </>
  )
}
