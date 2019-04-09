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
    theposition: 0
  }

  componentDidMount() {
    this.setState({ active: true });
    window.addEventListener('scroll', this.listenToScroll)
  };

  componentDidUpdate(prevProps, prevState) {
    const { active } = this.state;
    if ((active !== prevState.active) && (this.state.active === true)) {
      const timer = () => {setTimeout(() => this.setState({ active: false }), 1720)}
      timer();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height
  
    this.setState({
      theposition: scrolled,
    })
  }

  render() {
    const { active } = this.state;
    console.log(window.pageYOffset)
    return (
      <div className='about' onScroll={this.listenToScroll}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <Title active={active} />
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
          <div className='row'>
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
