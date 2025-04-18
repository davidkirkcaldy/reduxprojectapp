/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: {}
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const taskId = uuidv4();
      const newTask = {
        id: taskId,
        description: action.payload.description,
        completed: false,
        color: action.payload.color
      };
      state.tasks[taskId] = newTask;
    },
    removeTask: (state, action) => {
      const id = action.payload;
      delete state.tasks[id];
    },                
    markTaskCompleted: (state, action) => {
      const {id} = action.payload;
      if (id && state.tasks[id]) {
          state.tasks[id].completed = true;
      }
    },
    markTaskUncompleted: (state, action) => {
      const {id} = action.payload;
      if (id && state.tasks[id]) {
          state.tasks[id].completed = false;
      }
    },
    editTask: (state, action) => {
      const {id, description} = action.payload;
      if (id && state.tasks[id]) {
        state.tasks[id].description = description;
      }
    },
    clearTasks: (state) => {
      state.tasks = {};
    }
  }
});

export const { addTask, removeTask, markTaskCompleted, markTaskUncompleted, editTask, clearTasks } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export const selectTaskById = (taskId) => (state) => state.tasks.tasks[taskId];

export default tasksSlice.reducer;