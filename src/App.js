import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import Tasks from './features/tasks/Tasks';
import Weather from './features/weather/Weather';
import Quote from './features/quotes/Quote.js';

function App() {
  return (
    <div className="container">
      <div className="content">
        <Weather />
        <TaskInput />
        <Tasks />
        <Quote />
      </div>
    </div>
  );
}

export default App;
