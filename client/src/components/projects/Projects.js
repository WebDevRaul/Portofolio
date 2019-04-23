import React, { Component } from 'react';
import WOW from "wow.js";

// Components
import Title from './Title';
import ListOfProjects from './ListOfProjects';

export default class Projects extends Component {
  state = {
    active: false,
  }

  componentDidMount() {
    this.setState({ active: true });
    const wow = new WOW();
    wow.init();
  };

  render() {
    const slideRight = 'wow fadeInRight';
    const slideLeft = 'wow fadeInLeft';
    const fadeInUp = 'wow fadeInUp';
    return (
      <div className='projects'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col'>
              <Title
                slideLeft={slideLeft}
                slideRight={slideRight}
                fadeInUp={fadeInUp}
              />
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
