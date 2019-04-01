import React, { Component } from 'react';

// Components
import Title from './Title';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <Title />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
