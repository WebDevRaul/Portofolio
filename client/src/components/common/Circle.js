import React from 'react';
import PropTypes from 'prop-types';

// Css
import '../../css/skill.css';


const Circle = ({
  icon,
  text,
  svg,
}) => {
  return (
    <div className='m-auto circle-animation'>
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

Circle.defaultProps = {
  text: 'text'
};

export default Circle;