import React, { Component } from 'react';

// Components
import Title from './Title';
import AboutMe from './AboutMe';
import Skills from './Skills';
import MoreSkills from './MoreSkills';

// Css
import '../../css/about.css';


export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='container p-0'>
          <div className='row no-gutters'>
            <div className='col'>
              <Title />
            </div>
          </div>
          <div className='container p-0'>
            <div className='row no-gutters'>
              <div className='col'>
                <AboutMe />
              </div>
            </div>
          </div>
          <div className='container-fluid p-0'>
            <div className='row no-gutters'>
              <div className='col'>
                <Skills />
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row no-gutters'>
              <div className='col'>
                <MoreSkills />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};