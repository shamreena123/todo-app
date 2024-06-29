import React, { useState } from 'react';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import styles from "./App.module.css"

function App() {

//We create a state for all the todos and write some todos which will always be there when we refresh the page.
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Solve three problems on leetcode",
      completed: false
    },
    {
      id: "2",
      title: "Work on aptitude questions",
      completed: false
    },
    {
      id: "3",
      title: "Go through OOPS interview questions",
      completed: false
    },
  ]);


  //This is a function to add a new todo using the spread operator and state
  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);

  }


  //this is a function to update the todos if they are completed or not
  function toggleCompleted(id) {
    setTodos(prevTodos => prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return { ...todo };
      }
    }));
  }


  //This is a function to delete a todo
  function deleteTodo(id) {

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }



  //This is a function to edit the todo
  function updateTitle(id, title) {
    setTodos(prevTodos => prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: title };
      } else {
        return { ...todo };
      }

    }));
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} updateTitle={updateTitle} />
    </div>
  )
}

export default App