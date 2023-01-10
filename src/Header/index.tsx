import React from 'react'

import styles from "./styles.module.scss";

import { Link } from "react-scroll";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <Link
                        className={styles.link}
                        activeClass={styles.active}
                        smooth spy to="startSection"
                    >
                        Inicio
                    </Link>
                    <Link
                        className={styles.link}
                        activeClass={styles.active}
                        smooth spy to="projectsSection"
                    >
                        Projetos
                    </Link>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=isaac.correia.2406@gmail.com&su=Contato sobre vaga de desenvolvedor Web"
                        
                        target="_blank" rel="noreferrer" 
                        
                    >
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    )
}
