import React from 'react';
import Task from './Task';

const TodoColumn = ({ heading, color, tasks }) => (
  <div className="flex  flex-col items-center bg-light_blue_bg h-96 w-80 m-4 pb-4">   
    <div className={`flex items-center justify-center  h-9 w-80 ${color} py-2`}> 
      <h2 className=" text-xs text-white  m-4">{heading}</h2>
    </div>
    {heading === 'To Do' ? (
      <button className="flex items-center font-medium justify-center text-text-blue text-sm px-4 py-4 ">
      + Add New Task
    </button>
) : null}
   
    <div className='flex flex-col overflow-auto h-64'>
      {tasks.map(task => (
        <Task
          key={task.id}
          taskNumber={task.id}
          taskName={task.name}
          priorityNumber={task.priority}
          date={task.date}
          profiles={task.profiles}
        />
      ))}
    </div>
  </div>
);

export default TodoColumn;