import React, { useState } from 'react'
import styles from "./Todo.module.css"
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import EditTodo from './EditTodo';
import { CiEdit } from "react-icons/ci";

function Todo({ todo, deleteTodo, toggleCompleted, updateTitle }) {

    //Initially, the todo will not be in update mode
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    //This function handles the deletion using the todo id
    function handleDelete() {
        deleteTodo(todo.id);
    }

    //This function handles the completed or not completed task
    function handleToggle() {
        toggleCompleted(todo.id);
    }


    //This function is to handle to editing of title when we click on the edit symbol
    if (isUpdateMode) {
        return <EditTodo
            id={todo.id}
            updateTitle={updateTitle}
            setIsUpdateMode={setIsUpdateMode}
            title={todo.title} />;
    }

    return (

        /*In this div section, we handle all the tasks like toggling, deleting and editing the to-do. 
        We have imported icons from react-icons to give a better UI. */ 

        <div className={styles.todo}>
            <h3 className={todo.completed ? styles.completed : ""}>{todo.title}</h3>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setIsUpdateMode(!isUpdateMode)}><CiEdit size={25} /></button>
                <button onClick={handleDelete} className={styles.button} ><MdDelete size={25} /></button>
                <button onClick={handleToggle}
                    style={todo.completed ? { color: 'white', backgroundColor: 'black' } : { color: 'black', backgroundColor: 'white' }}
                    className={styles.button}>
                    <TiTick size={25} />
                </button>

            </div>
        </div>
    )
}

export default Todo