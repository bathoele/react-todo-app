import React from "react";

const TimerBox = () => {
  return (
    <div className='timer-box'>
      <h1 className='timer'>25:00</h1>
      <div className='break-timer'>
        <button className='break-time'>5 mins</button>
        <button className='break-time'>10 mins</button>
        <button className='break-time'>15 mins</button>
      </div>
    </div>
  )
}

export default TimerBox;