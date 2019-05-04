import React from 'react';

// Css
import '../../css/skill.css';


const DataCircle = ({
  svg,
}) => {
  return (
    <span className='m-auto'>
      <i className='m-1'>{svg}</i>
    </span>
  );
};

export default DataCircle;