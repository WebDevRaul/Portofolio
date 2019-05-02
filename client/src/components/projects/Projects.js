import React, { Component } from 'react';

// Animation
import WOW from "wow.js";

// Components
import Title from './Title';
import ProjectCard from './ProjectCard';

export default class Projects extends Component {

  componentDidMount() {
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
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
