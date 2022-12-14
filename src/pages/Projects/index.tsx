
import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import project1 from 'public/project1.png'

import project2 from 'public/project2.png'

export default function index() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>my projects</h1>
            <div className={styles.projectsContainer}>
                <a href="./project1" className={styles.project} >
                    <Image
                        src={project1}
                    />
                    <h1>Circles</h1>
                    <p>Projeto desenvolvido em React para demonstrar o funcionamento de um botão de <strong>UNDO</strong> e um de <strong>REDO</strong></p>
                    <div className={styles.badges_container} >
                        <img className={styles.badge}
                            src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge"
                        />
                        <img className={styles.badge}
                            src="https://img.shields.io/badge/-Saas-Bf4080?logo=sass&logoColor=white&style=for-the-badge"
                        />
                    </div>

                </a>
                <a className={styles.project}>
                    <Image
                        height={500}
                        src={project2}
                    />
                    <h1>Pokedex</h1>
                    <p>Projeto desenvolvido para testar o consumo de API utilizando <strong>Next.js.</strong>
                    </p>
                    <div className={styles.badges_container} >
                        <img className={styles.badge}
                            src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge"
                        />
                        <img className={styles.badge}
                            src="https://img.shields.io/badge/-Axios-E6E6FA?logo=axios&logoColor=black&style=for-the-badge"
                        />
                        <img className={styles.badge}
                            src="https://img.shields.io/badge/-Saas-Bf4080?logo=sass&logoColor=white&style=for-the-badge"
                        />
                    </div>
                </a>
                <a className={styles.project}>
                    <Image
                        height={500}
                        src={project2}
                    />
                    <h1>Project Name</h1>
                    <p>Lorem us cupiditate deleniti unde at placeat numquam! Magni.</p>
                    <div className={styles.badges_container} >
                        <img className={styles.badge}
                            src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge"
                        />
                        <img className={styles.badge}
                            src="https://img.shields.io/badge/-Axios-E6E6FA?logo=axios&logoColor=black&style=for-the-badge"
                        />
                    </div>
                </a>
                <a className={styles.project}>
                    <Image
                        height={500}
                        src={project2}
                    />
                    <h1>Project Name</h1>
                    <p>Lorem us cupiditate deleniti unde at placeat numquam! Magni.</p>
                </a>
                <a className={styles.project}>
                    <Image
                        height={500}
                        src={project2}
                    />
                    <h1>Project Name</h1>
                    <p>Lorem us cupiditate deleniti unde at placeat numquam! Magni.</p>
                </a>
                <a className={styles.project}>
                    <Image
                        height={500}
                        src={project2}
                    />
                    <h1>Project Name</h1>
                    <p>Lorem us cupiditate deleniti unde at placeat numquam! Magni.</p>
                </a>
            </div>
        </div>
    )
}
