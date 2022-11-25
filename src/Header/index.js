import React from 'react'

import styles from "./styles.module.scss";

import { Link } from "react-scroll";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <Link activeClass="active" smooth spy to="startSection" href="#">
                        Inicio
                    </Link>
                    <Link
                        activeClass="active" smooth spy to="projectsSection"
                        href="#">
                        Projetos
                    </Link>
                    <Link activeClass="active" smooth spy to="contactSection"
                        href="#">
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    )
}
