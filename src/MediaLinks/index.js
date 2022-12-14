import React from 'react'

import styles from "./styles.module.scss";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function MediaLinks() {
  return (
    <>
      <div className={styles.icon}>
        <a href='https://www.linkedin.com/in/isaac-correia-gon%C3%A7alves-4a7375138/' target="_blank" rel="noopener noreferrer">
          <BsLinkedin color="rgb(100, 255, 218)" size={35} />
        </a>
        <a href='https://github.com/isaac-goncalves' target="_blank" rel="noopener noreferrer">
          <BsGithub color="rgb(100, 255, 218)" size={35} />
        </a>
        <div className={styles.iconLine}></div>
      </div>
      <div className={styles.mailAddressContainer}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=isaac.correia.2406@gmail.com&su=Contato sobre vaga de developer" className={styles.mailAddress}>isaac.correia.2406@gmail.com</a>
        <div className={styles.mailAddressLine}></div>
      </div>
    </>
  )
}
