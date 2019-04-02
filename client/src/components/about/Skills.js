import React from 'react';

// Common
import Circle from '../common/Circle';

// Css
import '../../css/about.css';

export default function Skills() {
  return (
    <div className='skills text-center'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex'>
            <Circle icon='fab fa-html5 fa-3x' />
            <Circle icon='fab fa-js-square fa-3x' />
            <Circle icon='fab fa-css3-alt fa-3x' />
            <Circle icon='fab fa-react fa-3x' />
          </div>
        </div>
      </div>
    </div>
  )
}
