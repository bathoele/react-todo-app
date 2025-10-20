import React from "react";

const Task = (props) => {
  function handleClick() {
    props.delete(props.id);
  }
  return (
    <div className="task">
      <p>{props.text}</p>
      <p>{props.time}</p>
      <button onClick={handleClick}>X</button>
    </div>
  )
}

export default Task;