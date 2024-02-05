// src/components/Task.jsx
import React from 'react';
import Priority from './Priority';
import Profiles from './Profiles';
const Task = ({ taskNumber, taskName ,priorityNumber,date , profiles }) => (
  <div 
    className="flex flex-col items-start p-3 px-4 mb-2 bg-white w-72 h-28"
    style={{ boxShadow: '0px 4px 8px 0px #00000014' }}
  >
    <div className="flex  items-center   w-full">
      <span className=" mr-2 text-xs  leading-5 tracking-normal text-left">{taskNumber}</span>
      <span className="text-xs font-medium  tracking-normal text-left w-64">{taskName}</span>
    </div>
    <hr className="w-full border-1 border-gray-300 my-2" />

    <div className="flex items-center justify-end  mt-2">
      {/* <div 
        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white mr-2"
      >
        <span>ED</span>
      </div> */}
      <Profiles profiles={profiles} />
      <Priority  priorityNumber={priorityNumber} date={date} />
    </div>
  </div>
);

export default Task;