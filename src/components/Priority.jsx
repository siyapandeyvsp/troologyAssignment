// src/components/TaskItem.jsx
import React from 'react';

const Priority = ({ priorityNumber, date }) => (
  <div className=" ml-12 flex items-center justify-end space-x-2">
    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    <span className="text-xs font-medium tracking-normal text-left ">{priorityNumber} |</span>
    <span className="text-xs font-medium tracking-normal text-left ">{date}</span>
  </div>
);

export default Priority;