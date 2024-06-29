import React, { useState } from 'react'
import styles from "./EditTodo.module.css"

function EditTodo({ id, updateTitle, setIsUpdateMode, title: prevTitle }) {

    //we are using useState here to edit the title
    const [title, setTitle] = useState(prevTitle);


    //This function will do the task to edit the title when we click on the confirm button 
    function handleSubmit(e) {

        e.preventDefault();
        updateTitle(id, title);
        setIsUpdateMode(false);
    }

    return (

        /* form for editting the todo*/
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input type='text'
                name='title'
                id='title'
                className={styles.editInput}
                value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}>
            </input>

            <button className={styles.confirmBtn}>Confirm</button>
        </form>

    )
}

export default EditTodo