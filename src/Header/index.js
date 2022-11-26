import React from 'react'

import styles from "./styles.module.scss";



import { Link } from "react-scroll";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <Link
                      
                        activeClass={styles.active}
                        smooth spy to="startSection"
                    >
                        Inicio
                    </Link>
                    <Link
                        
                        activeClass={styles.active}
                        smooth spy to="projectsSection"
                    >
                        Projetos
                    </Link>

                    <Link 
                  
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
