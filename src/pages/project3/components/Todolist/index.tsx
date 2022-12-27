import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm';
import Todo from '../Todo';

import styles from "./styles.module.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const todoData = localStorage.getItem('todos');
    if (todoData) { 
      setTodos(JSON.parse(todoData));
    }
    setLoading(false);
  }, []);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);

    console.log(...todos);

    localStorage.setItem('todos', JSON.stringify(newTodos));

    console.log(todo, ...todos);

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    localStorage.setItem('todos', JSON.stringify(todos));

  };

  const removeTodo = id => {

    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);

    localStorage.setItem('todos', JSON.stringify(removeArr));


  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <>
      <div className={styles.formBody}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>TO-DOS</h1>
            <div>
              <p>Enter text into the input field to add items to your list.</p>
              <p>Click the item to mark it as complete.</p>
              <p>Click the X to remove the item from your list...</p>
            </div>
          </div>
          <TodoForm onSubmit={addTodo} />
          <Todo
            loading={loading}
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </>
  );
}

export default TodoList;