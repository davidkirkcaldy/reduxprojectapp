/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React from "react";
import { useSelector } from "react-redux";
// import task selector
import { selectTasks } from './tasksSlice.js';
import './Tasks.css';
import Task from './Task.js';

export default function Tasks() {
  const tasks =  useSelector(selectTasks);
  return (
    <section className="center">
      <ul className="tasks-list">
        {Object.values(tasks).map((task) => (
            <li key={task.id} className="task-li"><Task task={task}/></li>
        ))}
      </ul>
    </section>
  );
}