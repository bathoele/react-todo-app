import React, { useState } from 'react';
import './App.css';
import AddBox from './AddBox.jsx';
import TimerBox from './TimerBox.jsx';
import Task from './Task.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

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
        {/* map through tasks arr */}
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
        <button className='add-btn'>+</button>
        <AddBox add={addTask} />
      </div>
    </div>
  )
}

export default App;