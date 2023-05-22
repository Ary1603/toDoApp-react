import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './styles/tasksContainer.css';

function TasksContainer({tasksList, setIsEdit, setTask, setCompletedTask, completedTasksList, deleteTask, setIndex}) {
  return (
    <Container className='tasks-container'>
        <h2 className='container-titles'>To Do</h2>
        <Row>
            {tasksList.length > 0 ? tasksList.map((item, index) => (
                <Col key={index} className='items-container'>
                    <p className="task">{item}</p>
                    <button id='btn-success' className='btn-task' onClick={() => setCompletedTask(item)}>✔</button>
                    <button id='btn-update' className='btn-task' onClick={() => {
                        setIsEdit(true) 
                        setTask(item)
                        setIndex(index)
                    }}>Update</button>
                </Col>
            )): <p>Nothing yet #winning</p>}
        </Row>

        <h2 className='container-titles'>Completed</h2>
        <Row>
            {completedTasksList.length > 0 ? completedTasksList.map((item, index) => (
                <Col key={index} className='items-container'>
                    <p className="task">{item}</p>
                    <button id='btn-delete' className='btn-task' onClick={() => deleteTask(item)}>X</button>
                </Col>
            )) : <p>Nothing yet</p>}
        </Row>
    </Container>
  )
}

export default TasksContainer