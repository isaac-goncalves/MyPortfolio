import styles from "../styles/Home.module.scss";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Header from "../Header";
import MediaLinks from "../MediaLinks";
import Projects from "./Projects";
import Image from 'next/image'
import avatarImg from 'public/avatar.png'
import developerImg from 'public/developer.svg'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={`${styles.startSection} startSection`}>
          <div className={styles.content}>
            <div className={styles.detailsWrapper}>
            <div className={styles.profile}>
              <h3>PERFIL</h3>
              <p>
                Sou um programador dedicado e autodidata, com 2 anos de experiência no ecossistema JavaScript.
              </p>
              <p>
                Sou focado, curioso e persistente, buscando sempre aperfeiçoar minhas habilidades e ampliar meus conhecimentos. Estou à procura de uma oportunidade de trabalho em desenvolvimento Web Fullstack, onde possa contribuir para o sucesso da organização.
              </p>
              <h3>NOME</h3>
              <p>Isaac Correia Gonçalves</p>
              <h3>NASCIMENTO</h3>
              <p>24 de Junho de 1998</p>
              <h3>CARGO</h3>
              <p>Full Stack Developer.</p>
              <h3>EMAIL</h3>
              <p>isaac.correia.2406@gmail.com</p>
            </div>
            <div className={styles.skills}>
              <h3>Linguagens</h3>
              <ul>
                <li className={styles.percent}>
                  <strong>Javascript</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(69 121 255)",
                      },
                    }}
                    percent={85}
                  />
                </li>
                <li className={styles.percent}>
                  <strong>Typescript</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(69 121 255)",
                      },
                    }}
                    percent={65}
                  />
                </li>
              </ul>
              <h3>SKILLS</h3>
              <ul>
                <li className={styles.percent}>
                  <strong>FrontEnd</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(143 53 53 )",
                      },
                    }}
                    percent={75}
                  />
                </li>
                <li className={styles.percent}>
                  <strong>Backend</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(143 53 53 )",
                      },
                    }}
                    percent={65}
                  />
                </li>
                <li className={styles.percent}>
                  <strong>SQL & NoSQL</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(143 53 53 )",
                      },
                    }}
                    percent={25}
                  />
                </li>
                <li className={styles.percent}>
                  <strong>Web</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(143 53 53 )",
                      },
                    }}
                    percent={70}
                  />
                </li>
                <li className={styles.percent}>
                  <strong>Mobile</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(143 53 53 )",
                      },
                    }}
                    percent={25}
                  />
                </li>
              </ul>
              <h3>SOFT SKILLS</h3>
              <ul>
                <li className={styles.percent}>
                  <strong>Resolução de problemas
                  </strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(255 163 69 / 70%)",
                      },
                    }}
                    percent={99}
                  />
                </li>
                <li className={styles.percent}>
                  <strong>Curiosidade</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(255 163 69 / 70%)",
                      },
                    }}
                    percent={85}
                  />
                </li>
                <li className={styles.percent}>
                  <strong>Trabalho em equipe</strong>
                  <Progress
                    theme={{
                      active: {
                        symbol: "",
                        color: "rgb(255 163 69 / 70%)",
                      },
                    }}
                    percent={75}
                  />
                </li>
              </ul>
            </div>
            </div>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                <Image
                  src={avatarImg}
                  alt="Picture of the author"
                  width={250}
                  height={250}
                />
              </div>

              <a
                href="\Curriculos\Curiculo_Isaac_Correia_Gonçalves_v2.6.pdf"
                download="Isaac Correia Gonçalves - Curriculo.pdf"
                className={styles.downloadCVButton}
              >
                DOWNLOAD CV
              </a>
              <div className={styles.backGroundImg}>
                <Image
                  src={developerImg}
                  alt="Picture of man coding"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="projectsSection">
          <Projects />
        </div>
        <MediaLinks />
        <div className="contactSection"></div>
      </main>
      <footer className={styles.footer}>
        <a>Powered by Isaac</a>
      </footer>
    </div>
  );
}
