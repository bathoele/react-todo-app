import React, { useState } from 'react';
import './App.css';
import AddBox from './AddBox.jsx';
import TimerBox from './TimerBox.jsx';
import Task from './Task.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const actify = () => {
    setIsActive(current => !current);
  }

  const addTask = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    })
    document.getElementById("text-input").value = "";
    document.getElementById("time-input").value = "";
  }

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <TimerBox />
      <div className='task-box'>
        {tasks.map((taskItem, index) => {
          return (
            <Task
            key={index}
            id={index}
            text={taskItem.text}
            time={taskItem.time}
            delete={deleteTask}
            />
          )
        })}
        <button className='add-btn' onClick={actify}>+</button>
        <AddBox
        add={addTask}
        active={isActive}
        activation={actify}
        />
      </div>
    </div>
  )
}

export default App;