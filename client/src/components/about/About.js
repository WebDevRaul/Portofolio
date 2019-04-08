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
    active: true
  }

  componentDidMount() {
    this.setState({ active: false })
  };

  componentDidUpdate(prevProps, prevState) {
    const { active } = this.state;
    if ((active !== prevState.active) && (this.state.active === false)) {
      const timer = () => {setTimeout(() => this.setState({ active: true }), 1720)}
      timer();
    }
  }

  render() {
    const { active } = this.state;
    return (
      <div className='about'>
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
