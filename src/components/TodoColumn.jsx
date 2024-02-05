// // src/components/TodoColumn.jsx
// import React from 'react';
// // import { PlusIcon } from '@heroicons/react/solid';
// import Task from './Task';
// const TodoColumn = ({ heading , color}) => (
// <div className="flex scrollbar-thin flex-col items-center bg-light_blue_bg h-96 w-80 m-4 pb-4">   
// <div className={`flex items-center justify-center  h-9 w-80 ${color} py-2`}> 
//  <h2 className=" text-xs text-white  m-4">{heading}</h2>
// </div>
// <button className="flex items-center justify-center text-text-blue text-sm px-4 py-2 mt-4">
//       {/* <PlusIcon className="h-5 w-5 mr-2" />  */}
//        + Add New Task
//     </button>
//     <div className='flex flex-col overflow-auto h-64'>
//     <Task taskNumber={'T05'} taskName={'Raise Ad-hoc Advance Bill'} priorityNumber="Priority 2 " date="April 25'23 " profiles={['ED']}/>
//     <Task taskNumber={'T06'} taskName={'Generate Cost Estimation Revision2'} priorityNumber="Priority 2 " date="April 28'23" profiles={['AJ']} />
    

//     </div>
  
//     {/* Other components or elements go here */}
//   </div>
// );

// export default TodoColumn;

// src/components/TodoColumn.jsx
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