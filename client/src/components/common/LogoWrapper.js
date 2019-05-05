import React from 'react';

// Css
import '../../css/skill.css';


const LogoWrapper = ({
  svg,
}) => {
  return (
    <span className='m-auto'>
      <i className='m-1 logo-wrapper-font-size'>{svg}</i>
    </span>
  );
};

export default LogoWrapper;