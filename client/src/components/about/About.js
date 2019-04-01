import React, { Component } from 'react';

// Components
import Title from './Title';
import AboutMe from './AboutMe';
import Skills from './Skills';

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
          <div className='row'>
            <div className='col'>
              <AboutMe />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
