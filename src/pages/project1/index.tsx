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
    //repeats the creation of circles when holding the mouse button
    for (let i = 0; i < 100; i++) {

      if(event.keyup) return;
      console.log("Clicou");
      const [X, Y] = getClickPosition(event);
      console.log(Y);
      console.log(X);
      let newCircle = (
        <circle
          className="circle"
          key={Math.random()}
          cx={X}
          cy={Y}
          r="10"
          stroke="black"
          strokeWidth="1"
          fill={randomcolor()}
        />
      );
      let allCircles = [...circles, newCircle];
      console.log("allCircles", allCircles);
      setCircles(allCircles);
      setTimeout(() => console.log("timeout"), 1000);
    }
  }

  return (
    <div className={styles.App}>
      {" "}
      <h1 className={styles.h1}>
        Clique em qualquer lugar para criar um circulo
      </h1>
      <div onClick={createCircle} className={styles.circle}>
        <svg width="100%" height="100%">
          {circles}
        </svg>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={deleteCircle}>
          Undo
        </button>
        <button className={styles.button} onClick={restoreCircle}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
