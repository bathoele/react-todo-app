import React, { useState } from 'react';
import './App.css';
import AddBox from './AddBox.jsx';
import Timer from './Timer.jsx';
import Task from './Task.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const countdown = () => {
    let timeDisplay = document.getElementById("timer");
    let count = tasks[0].time;
    timeDisplay.textContent = count;

    const decrementer = () => {
      if (count == 0) {
        clearInterval(inter);
        return;
      }
      count--;
      console.log(count);
      timeDisplay.textContent = count;
    }
    let inter = setInterval(decrementer, 1000);
    
  }

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
      <div className='timer-box'>
        {/* Work out the timer in App.jsx first, then make it a component */}
        <h1 className='timer' id='timer'></h1>
        <button onClick={countdown}>START</button>
      </div>
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