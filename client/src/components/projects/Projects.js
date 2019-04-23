import React, { Component } from 'react';

// Components
import Title from './Title';
import ListOfProjects from './ListOfProjects';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col'>
              <Title />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <ListOfProjects />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
