import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// CSS Styles
import "./styles/toDoList.css";
import TasksContainer from "./TasksContainer";
import EditTask from "./EditTask";

function ToDoList() {
  const [task, setTask] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [isCompleted, setIsCompleted] = useState([]);
  const [taskIndex, setTaskIndex] = useState();
  const [inputClean, setInputClean] = useState();
  const handleOnChangeTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasksList([...tasksList, task]);
    setInputClean("");
  };

  const completedTask = (task) => {
    setIsCompleted([...isCompleted, task]);
    setTasksList(tasksList.filter((item) => item != task));
  };

  const deleteTask = (task) => {
    setIsCompleted(isCompleted.filter((item) => item != task));
  };

  return (
    <Container>
      {isEdit ? (
        <EditTask
          task={task}
          tasksList={tasksList}
          index={taskIndex}
          setIsEdit={setIsEdit}
        />
      ) : (
        <>
          <h1>My todo list</h1>
          <form className="create-task">
            <input
              className="inputs"
              onFocus={() => setInputClean(undefined)}
              type="text"
              placeholder="What task you need to-do?"
              onChange={handleOnChangeTask}
              value={inputClean}
            />
            <button type="submit" onClick={addTask} className="btn-add-task">
              +
            </button>
          </form>
          <TasksContainer
            tasksList={tasksList}
            completedTasksList={isCompleted}
            setIsEdit={setIsEdit}
            setIndex={setTaskIndex}
            setCompletedTask={completedTask}
            deleteTask={deleteTask}
            setTask={setTask}
          />
        </>
      )}
    </Container>
  );
}

export default ToDoList;
