import React from 'react';
import './App.css';

function App() {
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
        <div className='task'>
          <p className='title'></p>
          <p className='time-set'></p>
        </div>
        <button className='add-btn'>+</button>
      </div>
    </div>
  )
}

export default App
