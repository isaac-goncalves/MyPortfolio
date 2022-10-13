import React from 'react'

import styles from "./styles.module.scss";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <a className={styles.active} href="#">
                        Inicio
                    </a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}
