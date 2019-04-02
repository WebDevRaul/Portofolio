import React from 'react';
import PropTypes from 'prop-types';

// Css
import '../../css/skill.css';


const Square = ({
  text,
  svg,
}) => {
  return (
    <div className='m-auto'>
      <div className='circle'>
        <div className='outer-circle' >
          <div className='inner-circle' >
            <span className=''>
              <i>{svg}</i>
            </span>
          </div>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

Square.defaultProps = {
  text: 'text'
};

export default Square;