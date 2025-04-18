/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { removeTask, markTaskCompleted } from './tasksSlice.js';

const Task = ({ task }) => {
    const [isSelected, setIsSelected] = useState(false);
    const dispatch = useDispatch();

    const handleOnFocus = () => {
        console.log("Task focused");
      setIsSelected(true); // Set the selected state to true
    }
    const handleOnBlur = () => {
        console.log("Task blurred");
      setIsSelected(false); // Set the selected state to false
    }

    const handleRemoveClick = () => {
        console.log("Remove clicked");
        setIsSelected(true);
      dispatch(removeTask(task.id)); // Dispatch the remove task action
    }

    const handleDeleteClick = () => {
        console.log("Delete clicked");
        setIsSelected(true);
      dispatch(markTaskCompleted({id: task.id})); // Dispatch the mark task completed action
    }
    const btnStyle = {
        visibility: isSelected ? 'visible' : 'hidden',
        zIndex: 10,
        opacity: task.completed ? 0.5 : 1.0,
    }

  return (
    <div    
            onMouseEnter={handleOnFocus}
            onMouseLeave={handleOnBlur}
            style={{background: task.color, opacity: task.completed ? 0.1 : 1.0}} 
            className="task" >
        <h3>{task.description}</h3>
        <div style={btnStyle} className="task-buttons">
          <button onClick={handleRemoveClick} className="task-button" style={{ background: 'red' }}>Remove</button>
          <button onClick={handleDeleteClick} className="task-button" style={{ background: 'green' }}>Done</button>
        </div>
    </div>
  );
}
export default Task;