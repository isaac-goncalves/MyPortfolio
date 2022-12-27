import React, { useState } from 'react';
import TodoForm from '../TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import styles from "./styles.module.scss";

const Todo = ({ loading, todos, completeTodo, removeTodo, updateTodo }) => {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  if (loading) { return <div>Loading...</div> }
  else {
    return todos?.map((todo) => (
      <>
        <div
          className={styles.todo_row}
          key={todo.id}
        >
          <div className={styles.todoContainer} onClick={() => completeTodo(todo.id)}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              className={styles.checkbox}
            // onChange={() => completeTodo(todo.id)}
            />
            <label className={styles.labeltext}>
              {todo.text}
            </label>
          </div>
          <div className={styles.icons}>
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}

            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}

            />
          </div>
        </div >
      </>
    ));
  };
}

export default Todo;