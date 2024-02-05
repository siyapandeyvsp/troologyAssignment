// src/App.jsx
import React from 'react';
import './App.css';
import TaskColumns from './components/TaskColumns';
import TodoColumn from './components/TodoColumn.jsx';
const colorMapping = {
  'To do': 'bg-todo_bg',
  'In Progress': 'bg-inprogress_bg',
  'Completed': 'bg-completed_bg',
  // Add more mappings here
};
const App = () => {
  // Fetch or define your tasks here
  // const tasks = [
  //   // ...
  // ];
  const tasks = [
    { id: 'T05', name: 'Raise Ad-hoc Advance Bill', status: 'To Do', priority: 'Priority 2', date: "April 25'23", profiles: ['ED'] },
    { id: 'T06', name: 'Generate Cost Estimation Revision2', status: 'To Do', priority: 'Priority 2', date: "April 28'23", profiles: ['AJ'] },
    { id: 'T06', name: 'Generate Cost Estimation Revision2', status: 'To Do', priority: 'Priority 2', date: "April 28'23", profiles: ['AJ'] },
    { id: 'T06', name: 'Generate Cost Estimation Revision2', status: 'To Do', priority: 'Priority 2', date: "April 28'23", profiles: ['AJ'] },
    { id: 'T06', name: 'Generate Cost Estimation Revision2', status: 'To Do', priority: 'Priority 2', date: "April 28'23", profiles: ['AJ'] },
    { id: 'T06', name: 'Generate Cost Estimation Revision2', status: 'To Do', priority: 'Priority 2', date: "April 28'23", profiles: ['AJ'] },
    { id: 'T06', name: 'Generate Cost Estimation Revision2', status: 'To Do', priority: 'Priority 2', date: "April 28'23", profiles: ['AJ'] },
    { id: 'T06', name: 'Generate Cost Estimation Revision2', status: 'To Do', priority: 'Priority 2', date: "April 28'23", profiles: ['AJ'] },
    { id: 'T01', name: 'Add Daily Field Report ', status: 'In Progress', priority: 'Priority 1', date: "April 12'23", profiles: ['S','EJ','AB','CD'] },
    { id: 'T04', name: 'Raise Notice of Change Event', status: 'In Progress', priority: 'Priority 1', date: "April 21'23", profiles: ['S','EJ','AB','CD','BG'] },
    { id: 'T02', name: 'Generate Progress Bill ', status: 'Completed', priority: 'Priority 3', date: "April 12'23", profiles: ['S','EJ','AB','CD','BG'] },
    { id: 'T03', name: 'Create Invoice', status: 'Completed', priority: 'Priority 3', date: "April 13'23", profiles: ['S','EJ','AB','CD'] },
    // More tasks...
  ];

//   return (
// <div className="flex justify-center items-center h-screen overflow-hidden">
//     <TodoColumn heading="To do" color={colorMapping['To do']} />
//     <TodoColumn heading="In Progress" color={colorMapping['In Progress']} />
//     <TodoColumn heading="Completed" color={colorMapping['Completed']} />
//   </div>
//   );
// };
return (
  <div className="flex justify-center items-center h-screen overflow-hidden">
    <TaskColumns tasks={tasks} />
  </div>
);
};

export default App;