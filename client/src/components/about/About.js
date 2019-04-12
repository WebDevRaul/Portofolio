import React, { Component } from 'react';

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
    animateSkill: false,
    animateAboutMe: false,
    position: 0,
  }

  componentDidMount() {
    this.setState({ active: true });
    window.addEventListener('scroll', this.listenToScroll)
  };

  componentDidUpdate(prevProps, prevState) {
    const { active, position, animateSkill } = this.state;
    if ((active !== prevState.active) && (this.state.active === true)) {
      const timer = () => {setTimeout(() => this.setState({ active: false }), 1720)}
      timer();
    }
    // Set animation on position
    if ((position > 550) && (animateSkill !== true)) {
      this.setState({ animateSkill: true })
    }
    if ((position < 350) && (animateSkill === true)) {
      this.setState({ animateSkill: false })
    }
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const height = window.outerHeight;
    this.setState({
      position: window.pageYOffset
    })
  }

  render() {
    const { active, animateSkill, animateAboutMe } = this.state;
    return (
      <div className='about' onScroll={this.listenToScroll}>
        <div className='container-fluid p-0'>
          <div className='row no-gutters'>
            <div className='col'>
              <Title active={active} />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <AboutMe animation={animateAboutMe} />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <Skills animate={animateSkill} />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <p>More Skills</p>
              <MoreSkills />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
