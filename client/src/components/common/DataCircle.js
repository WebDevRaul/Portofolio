import React from 'react';

// Css
import '../../css/skill.css';


const DataCircle = ({
  svg,
}) => {
  return (
    <div className='m-auto'>
      <div className='circle d-flex m-auto'>
        <div className='outer-circle d-flex m-auto' >
          <div className='inner-circle d-flex m-auto' >
            <span className='d-flex m-auto'>
              <i>{svg}</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCircle;