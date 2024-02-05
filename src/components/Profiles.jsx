// src/components/Profiles.jsx
import React from 'react';

const Profiles = ({ profiles }) => (
  <div className="flex ">
    {profiles.slice(0, 2).map((profile, index) => (
      <div
        key={profile}
        className="w-8 h-8 text-xs rounded-full flex items-center justify-center text-white mr-2"
        style={{
          zIndex: index + 1,
          marginLeft: index > 0 ? '-35px' : '0',
          backgroundColor: `rgba(255, 165, 0, ${0.6 + index * 0.2})`, // Adjust the opacity based on the z-index
          border: '2px solid white'
        }}
      >
        <span>{profile}</span>
      </div>
    ))}
    {profiles.length > 2 && (
      <div className="  text-xs flex items-center justify-start text-text-gray ">
        <span>+{profiles.length - 2}</span>
      </div>
    )}
  </div>
);

export default Profiles;