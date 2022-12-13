
import { useState } from "react";
import styles from "./styles.module.scss";
import randomcolor from "randomcolor";

function App() {
  const [circles, setCircles] = useState([]);

  const [deletedCircles, setDeletedCircles] = useState([]);

  const getClickPosition = (e) => {
    const dim = e.target.getBoundingClientRect();
    const X = e.clientX - dim.left;
    const Y = e.clientY - dim.top;
    return [X, Y];
  };

  const deleteCircle = () => {
    if (circles.length > 0) {
      const circle = circles.pop();
      setDeletedCircles([...deletedCircles, circle]);
      setCircles([...circles]);
    }
  };

  const restoreCircle = () => {
    if (deletedCircles.length > 0) {
      const circle = deletedCircles.pop();
      setCircles([...circles, circle]);
      setDeletedCircles([...deletedCircles]);
    }
  };

  function createCircle(event) {
    console.log("Clicou");
    const [X, Y] = getClickPosition(event);
    console.log(Y);
    console.log(X);
    let newCircle = (
      <circle
        className="circle-style"
        key={Math.random()}
        cx={X}
        cy={Y}
        r="20"
        stroke={randomcolor()}
        strokeWidth="5"
      />
    );
    let allCircles = [...circles, newCircle];
    console.log("allCircles", allCircles);
    setCircles(allCircles);
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.h1}>Clique para criar um círculo</h1>
      <div onClick={createCircle} className={styles.circle_area}>
        <svg width="100%" height="100%">
          {circles}
        </svg>
      </div>
      <div className={styles.buttons}>
      <button className={styles.button} onClick={deleteCircle}>Undo</button>
      <button className={styles.button} onClick={restoreCircle}>Redo</button>
      </div>
      <a href="/">
      <button className={styles.home_button}>Voltar para pagina inicial</button>
      </a>
    </div>
  );
}

export default App;
