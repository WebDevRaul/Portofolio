import React, { Component } from 'react';
import WOW from "wow.js";

// Components
import Title from './Title';
import AboutMe from './AboutMe';
import Skills from './Skills';
import MoreSkills from './MoreSkills';

// Css
import '../../css/about.css';


export default class About extends Component {
  state = {
    active: false,
  }

  componentDidMount() {
    this.setState({ active: true });
    const wow = new WOW();
    wow.init();
  };

  componentDidUpdate(prevProps, prevState) {
    const { active } = this.state;
    if ((active !== prevState.active) && (this.state.active === true)) {
      const timer = () => {setTimeout(() => this.setState({ active: false }), 620)}
      timer();
    }
  };

  render() {
    const { active } = this.state;
    const slideRight = 'wow bounceInRight';
    const slideLeft = 'wow bounceInLeft';
    const slideUp = 'wow fadeInUp';
    return (
      <div className='about'>
        <div className='container-fluid p-0'>
          <div className='row no-gutters'>
            <div className='col'>
              <Title active={active} />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <AboutMe
                slideLeft={slideLeft}
                slideRight={slideRight}
              />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <Skills slideUp={slideUp} />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <MoreSkills slideUp={slideUp} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
