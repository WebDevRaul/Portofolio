import React from 'react';

// Css
import '../../css/skill.css';


const Circle = ({
  icon,
  text,
  svg,
}) => {
  return (
    <div className='m-auto'>
      <div className='circle d-flex m-auto'>
        <div className='outer-circle d-flex m-auto' >
          <div className='inner-circle d-flex m-auto' >
            <span className='d-flex m-auto'>
              <i className={icon ? icon : null}>{svg ? svg : null}</i>
            </span>
          </div>
        </div>
      </div>
      <p className='circle-text'>{text}</p>
    </div>
  );
};

export default Circle;