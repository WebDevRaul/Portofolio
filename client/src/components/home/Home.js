import React, { Component } from 'react';

// Components
import Responsive from './Responsive';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='row no-gutters'>
            <div className='col'>
              <Responsive />
            </div>
          </div>
      </div>
    )
  }
}
