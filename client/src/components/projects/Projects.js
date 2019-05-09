import React, { Component } from 'react';

// Animation
import WOW from "wow.js";

// Components
import Title from './Title';
import ProjectImageSlider from './ProjectImageSlider';
import ProjectCard from './ProjectCard';

// CSS
import '../../css/project.css';

export default class Projects extends Component {

  componentDidMount() {
    const wow = new WOW();
    wow.init();
    this.onScrollToCard()
  };

  onClickSlider = id => {
    console.log('id', id)
    // window.scrollTo(0, ref.current.offsetTop);
  }

  onScrollToCard = (ref, id) => {
    console.log('ref', ref);
    console.log('id', id)
  }

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
              <ProjectImageSlider onClickSlider={this.onClickSlider} />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <ProjectCard onScrollToCard={this.onScrollToCard} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
