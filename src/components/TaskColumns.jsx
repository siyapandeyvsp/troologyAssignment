// src/components/TaskColumns.jsx
import React from 'react';
import TodoColumn from './TodoColumn';
import '../App.css'
const TaskColumns = ({ tasks }) => (
  <div className="flex">
    <TodoColumn 
    className ="scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded"
      heading="To Do"
      color="bg-red-500"
      tasks={tasks.filter(task => task.status === 'To Do')}
    />
    <TodoColumn
        className ="scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded"

      heading="In Progress"
      color="bg-yellow-500"
      tasks={tasks.filter(task => task.status === 'In Progress')}
    />
    <TodoColumn
        className ="scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded"

      heading="Completed"
      color="bg-green-500"
      tasks={tasks.filter(task => task.status === 'Completed')}
    />
  </div>
);

export default TaskColumns;