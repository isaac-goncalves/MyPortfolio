import React from 'react'

import styles from "./styles.module.scss";

import Image from 'next/image';

import { Link } from "react-scroll";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <Image className={styles.avatar} width="350px"
                        height="300px" src="/logo.jpg" />
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

                    <Link
                        className={styles.link}
                        activeClass={styles.active}
                        smooth spy to="contactSection"
                    >
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    )
}
