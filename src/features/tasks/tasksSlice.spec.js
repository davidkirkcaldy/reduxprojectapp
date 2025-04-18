/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import tasksReducer, {
    addTask,
    removeTask,
    markTaskCompleted,
    markTaskUncompleted,
    editTask,
    clearTasks,
  } from './tasksSlice.js';

import { v4 as uuidv4 } from "uuid";

  describe('tasks reducer', () => {
    const initialState = {
      tasks: {},
    };
    it('should handle initial state', () => {
      expect(tasksReducer(undefined, { type: 'unknown' })).toEqual({
        tasks: {},
      });
    });
  
    it('should handle addTask', () => {
      const actual = tasksReducer(initialState, addTask({
        description: 'Test task',
      }));
      const taskId = Object.keys(actual.tasks)[0];
      expect(actual.tasks[taskId]).toEqual({
        id: taskId,
        description: 'Test task',
        completed: false,
      });
    })

    it('should handle removeTask', () => {
      const taskId = uuidv4();
      const initialStateWithTask = {
        tasks: {
          [taskId]: {
            id: taskId,
            description: 'Test task',
            completed: false,
          },
        },
      };
      const actual = tasksReducer(initialStateWithTask, removeTask(taskId));
      expect(actual.tasks).toEqual({});
    });
  
    it('should handle markTaskCompleted', () => {
      const taskId = uuidv4();
      const initialStateWithTask = {
        tasks: {
          [taskId]: {
            id: taskId,
            description: 'Test task',
            completed: true,
          },
        },
      };
      const actual = tasksReducer(initialStateWithTask, markTaskCompleted(taskId));
      expect(actual.tasks[taskId].completed).toEqual(true);
    });
    it('should handle markTaskUncompleted', () => {
      const taskId = uuidv4();
      const initialStateWithTask = {
        tasks: {
          [taskId]: {
            id: taskId,
            description: 'Test task',
            completed: false,
          },
        },
      };
      const actual = tasksReducer(initialStateWithTask, markTaskUncompleted(taskId));
      expect(actual.tasks[taskId].completed).toEqual(false);
    });
    it('should handle editTask', () => {
      const taskId = uuidv4();
      const initialStateWithTask = {
        tasks: {
          [taskId]: {
            id: taskId,
            description: 'Test task',
            completed: false,
          },
        },
      };
      const actual = tasksReducer(initialStateWithTask, editTask({ id: taskId, description: 'Updated task' }));
      expect(actual.tasks[taskId].description).toEqual('Updated task');
    });
    it('should handle clearTasks', () => {
      const initialStateWithTasks = {
        tasks: {
          task1: {
            id: 'task1',
            description: 'Test task 1',
            completed: false,
          },
          task2: {
            id: 'task2',
            description: 'Test task 2',
            completed: false,
          },
        },
      };
      const actual = tasksReducer(initialStateWithTasks, clearTasks());
      expect(actual.tasks).toEqual({});
    });
  });