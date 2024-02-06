// src/App.jsx
import React from 'react';
import './App.css';
import TaskHandler from './components/TaskHandler';
const App = () => {
 
return (
<div className="flex justify-center items-center sm:h-screen overflow-auto">   
 <TaskHandler />
  </div>
);
};
export default App;