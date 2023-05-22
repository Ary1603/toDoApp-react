import React, { useState } from 'react'
import Container from "react-bootstrap/Container";

function EditTask({task, tasksList, index, setIsEdit}) {
    const [newTask, setNewTask] = useState()

    const handleOnChangeNewTask = (e) => {
        setNewTask(e.target.value)
    }

    const updateTask = () => {
        console.log(tasksList[index])
        tasksList[index] = newTask
        setIsEdit(false) 
    }

  return (
    <Container>
      <h1>Update your task</h1>
        <input className='inputs' type='text' placeholder={task} onChange={handleOnChangeNewTask}/>
        <button id='btn-success'  onClick={updateTask}>✔</button>
    </Container>
  )
}

export default EditTask