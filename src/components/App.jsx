import React, { useState } from 'react';
import './App.css';
import AddBox from './AddBox.jsx';
import Timer from './Timer.jsx';
import Task from './Task.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [pauseTime, setPauseTime] = useState(0);

  const updateTimer = (count) => {
    let timeDisplay = document.getElementById("timer");
    timeDisplay.textContent = count;
  }

  const countdown = () => {
    let count = pauseTime > 0 ? pauseTime : tasks[0].time;
    updateTimer(count);

    const decrementer = () => {
      if (count === 0) {
        clearInterval(inter);
        setPauseTime(count);
        setIsCounting(false);
        return;
      } else if (isCounting === false) {
        console.log(isCounting);
        clearInterval(inter);
        return;
      }
      count--;
      updateTimer(count);
      setPauseTime(count);
    }
    let inter = setInterval(decrementer, 1000);
  }

  const pausePlay = () => {
    if (isCounting === false) {
      setIsCounting(true);
      countdown();
    } else {
      setIsCounting(false);
    }
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
        <button onClick={pausePlay} className={!isCounting ? 'startBtn active' : 'startBtn'}>START</button>
        {/* pause button that appears in place of the start button */}
        <button onClick={pausePlay} className={isCounting ? 'pauseBtn active' : 'pauseBtn'}>PAUSE</button>
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