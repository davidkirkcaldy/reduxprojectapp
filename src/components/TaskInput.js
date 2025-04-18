/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import './TaskInput.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const colors = [ "green", "blue", "purple", "orange"];
const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskDescription, setTaskDescription] = useState('');

  const handleInputChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a newline in the textarea
      if (taskDescription.trim()) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        dispatch(addTask({ id: uuidv4(), description: taskDescription, completed: false , color: color}));
        setTaskDescription('');
      }
    }
  };

  return (
    <div className="task-input">
        <h2 className="task-input-title">What's on your mind today?</h2>
        <textarea
            className="task-input-textarea"
            rows="1"
            value={taskDescription}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
        />
    </div>
  );
}
export default TaskInput;