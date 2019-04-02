import React from 'react';
import PropTypes from 'prop-types';

// Css
import '../../css/circle.css';


const Circle = ({
  icon,
}) => {
  return (
    <div className='circle d-flex m-2'>
      <div className='outer-circle m-auto d-flex'>
        <div className='inner-circle m-auto d-flex'>
          <span className='m-auto d-flex'><i className={icon}></i></span>
        </div>
      </div>
    </div>
  );
};

Circle.propTypes = {
  icon: PropTypes.string.isRequired
};

Circle.defaultProps = {
  text: 'text'
};

export default Circle;