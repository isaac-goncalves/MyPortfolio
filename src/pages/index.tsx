import styles from '../styles/Home.module.scss'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Header from '../Header';
import MediaLinks from '../MediaLinks';
import { Link } from "react-scroll";

import Projects from './Projects';

export default function Home() {

  return (
    <div className={styles.container}>
      <div id="startSection">
      </div>
      <Header
      />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.profile}>
            <h3>
              PERFIL
            </h3>
            <p>
              Tenho estudado o ecossistema JavaScript pelos últimos 2 anos e estou à procura de uma oportunidade de trabalho em desenvolvimento Web Backend.
            </p>
            <h3>
              NOME
            </h3>
            <p>
              Isaac Correia Gonçalves
            </p>
            <h3>
              NASCIMENTO
            </h3>
            <p>
              24 de Junho de 1998
            </p>
            <h3>
              CARGO
            </h3>
            <p>
              Full Stack Developer.
            </p>
            <h3>
              EMAIL
            </h3>
            <p>
              isaac.correia.2406@gmail.com
            </p>
          </div>
          <div className={styles.skills}>
            <h3>
              Linguagens
            </h3>
            <ul>
              <li className={styles.percent}>
                <strong>Javascript</strong>
                <Progress theme={{
                  active: {
                    symbol: '',
                    color: 'rgb(69 121 255)'
                  }
                }} percent={75} />
              </li>
              <h3>
                SKILLS
              </h3>
              <li className={styles.percent}>
                <strong>FrontEnd</strong>
                <Progress theme={{
                  active: {
                    symbol: '',
                    color: 'rgb(69 121 255)'
                  }
                }} percent={75} />
              </li>
              <li className={styles.percent}>
                <strong>Backend</strong>
                <Progress theme={{
                  active: {
                    symbol: '',
                    color: 'rgb(69 121 255)'
                  }
                }} percent={65} />
              </li>
              <li className={styles.percent}>
                <strong>Web</strong>
                <Progress theme={{
                  active: {
                    symbol: '',
                    color: 'rgb(69 121 255)'
                  }
                }} percent={70} />
              </li>
              <li className={styles.percent}>
                <strong>Mobile</strong>
                <Progress theme={{
                  active: {
                    symbol: '',
                    color: 'rgb(69 121 255)'
                  }
                }} percent={25} />
              </li>
              <li className={styles.percent}>
                <strong>Desktop</strong>
                <Progress theme={{
                  active: {
                    symbol: '',
                    color: 'rgb(69 121 255)'
                  }
                }} percent={10} />
              </li>
            </ul>

          </div>
          <div className={styles.avatarWrapper}>
            <img className={styles.avatar} src='/avatar.png' />
            <a
              href="\Curriculos\Curiculo_Isaac_Correia_Gonçalves_v2.6.pdf"
              download="Isaac Correia Gonçalves - Curriculo.pdf"
              className={styles.downloadCVButton}>DOWNLOAD CV
            </a>
            <img className={styles.backGroundImg} src='/developer.svg' />
          </div>
        </div>
        <div id="projectsSection">
          <Projects />
        </div>
        <MediaLinks />
        <div id="contactSection">TEste</div>

      </main>
      <footer className={styles.footer}>
        <a>
          Powered by Isaac
        </a>
      </footer>
    </div>
  )
}