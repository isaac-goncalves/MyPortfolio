
import React from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import project1 from 'public/project1.png'

export default function index() {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>my projects</h1>
            <div className={styles.projectsContainer}>
                <a href="./project1" className={styles.project} >
                    <Image 
                    src={project1}
                    />
                    <h1>Circle Test</h1>
                    <p>Projeto desenvolvido em React para demonstrar o funcionamento de um botão de <strong>UNDO</strong> e um de <strong>REDO</strong></p>
                </a>
                <div className={styles.project}>
                    <img src="https://img.freepik.com/premium-photo/abstract-technology-binary-code-background_34629-592.jpg" alt="" />
                    <h1>Project Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui consequatur dignissimos culpa est suscipit dolore ad fuga ipsam eveniet voluptas, ullam temporibus cupiditate deleniti unde at placeat numquam! Magni.</p>
                </div>
                <div className={styles.project}>
                    <img src="https://img.freepik.com/premium-photo/abstract-technology-binary-code-background_34629-592.jpg" alt="" />
                    <h1>Project Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui consequatur dignissimos culpa est suscipit dolore ad fuga ipsam eveniet voluptas, ullam temporibus cupiditate deleniti unde at placeat numquam! Magni.</p>
                </div>
                <div className={styles.project}>
                    <img src="https://img.freepik.com/premium-photo/abstract-technology-binary-code-background_34629-592.jpg" alt="" />
                    <h1>Project Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui consequatur dignissimos culpa est suscipit dolore ad fuga ipsam eveniet voluptas, ullam temporibus cupiditate deleniti unde at placeat numquam! Magni.</p>
                </div>
                <div className={styles.project}>
                    <img src="https://img.freepik.com/premium-photo/abstract-technology-binary-code-background_34629-592.jpg" alt="" />
                    <h1>Project Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui consequatur dignissimos culpa est suscipit dolore ad fuga ipsam eveniet voluptas, ullam temporibus cupiditate deleniti unde at placeat numquam! Magni.</p>
                </div>
                <div className={styles.project}>
                    <img src="https://img.freepik.com/premium-photo/abstract-technology-binary-code-background_34629-592.jpg" alt="" />
                    <h1>Project Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui consequatur dignissimos culpa est suscipit dolore ad fuga ipsam eveniet voluptas, ullam temporibus cupiditate deleniti unde at placeat numquam! Magni.</p>
                </div>
            </div>
        </div>
    )
}
