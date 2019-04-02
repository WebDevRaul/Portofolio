import React from 'react';
import PropTypes from 'prop-types';


const Circle = ({
  text,
}) => {
  return (
    <div className='circle m-auto'>
      <div className='outer-circle m-auto'>
        <div className='inner-circle m-auto'>
          <span className='m-auto'>{text}</span>
        </div>
      </div>
    </div>
  );
};

Circle.propTypes = {
  text: PropTypes.string.isRequired
};

Circle.defaultProps = {
  text: 'text'
};

export default Circle;