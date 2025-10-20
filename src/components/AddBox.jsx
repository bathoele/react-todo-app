import React, { useState } from "react";

function AddBox(props) {
  const [task, setTask] = useState({
    text: "",
    time: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  const addTask = (e) => {
    props.add(task);
    setTask({
      text: "",
      time: "",
    })
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="text" onChange={handleChange} type="text" id='text-input' placeholder='Task Name' />
        <input name="time" onChange={handleChange} type="text" id='time-input' placeholder='Task Time' />
        <button onClick={addTask}>Add</button>
      </form>
    </div>
  )
}

export default AddBox;