import React, { useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  }

  return (
    <div>
      <div className='timer-box'>
        <h1 className='timer'>25:00</h1>
        <div className='break-timer'>
          <button className='break-time'>5 mins</button>
          <button className='break-time'>10 mins</button>
          <button className='break-time'>15 mins</button>
        </div>
      </div>
      <div className='task-box'>
        {/* map through tasks arr */}
        <button className='add-btn' onClick={handleClick}>+</button>
        {/* adds an empty task to tasks arr */}
        <div className={isActive ? 'add-box active' : 'add-box'}>
          <form>
            <input type="text" id='text-input' placeholder='Task Name' />
            <input type="text" id='time-input' placeholder='Task Time' />
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
