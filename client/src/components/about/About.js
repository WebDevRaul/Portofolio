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
    isScrolling: false,
  }

  componentDidMount() {
    this.setState({ active: true });
    window.addEventListener("scroll", this.throttleScroll, false);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttleScroll)
  }

  throttleScroll = (e) => {
    const { isScrolling } = this.state;
    if (isScrolling === false) {
      window.requestAnimationFrame(() => {
        this.scrolling(e);
        this.setState({ isScrolling: false })
      });
    }
    this.setState({ isScrolling: true })
  }

  scrolling = (e) => {
    if(this.aboutMeBioFirst) this.setState({ animateAboutMe: true })
  }

  // Callback from AboutMe component
  aboutMeBioFirst = element => {
    const top = element.top;
    const bottom = element.bottom;
 
    return ((top >= 0) && (bottom <= window.innerHeight))
  }
  aboutMeBioSecond = element => {
    console.log(element)
  }
  aboutMeBioThird = element => {
    console.log(element)
  }



  render() {
    console.log(this.state.animateAboutMe);
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
              <AboutMe 
                animation={animateAboutMe} 
                first={this.aboutMeBioFirst}
                second={this.aboutMeBioSecond}
                third={this.aboutMeBioThird}
              />
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
