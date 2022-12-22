import React, { useState } from 'react';
import TodoForm from '../TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import styles from "./styles.module.scss";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
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

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? styles.todo_row : styles.todo_row}
      key={index}
    >
      <div className={styles.todoContainer} key={todo.id} onClick={() => completeTodo(todo.id)}>
        <p>
          {todo.text}
        </p>
      </div>
      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}

        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}

        />
      </div>
    </div>
  ));
};

export default Todo;