import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import Tasks from './features/tasks/Tasks';

function App() {
  return (
    <div className="App">
      <TaskInput />
      <Tasks />
    </div>
  );
}

export default App;
