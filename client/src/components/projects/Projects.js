import React, { Component } from 'react';

// Components
import Title from './Title';
import Responsive from './Responsive';
import ListOfProjects from './ListOfProjects';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Title />
        <Responsive />
        <ListOfProjects />
      </div>
    )
  }
}
