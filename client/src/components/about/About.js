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
    active: false
  }

  componentDidMount() {
    this.setState({ active: true })
  };

  componentDidUpdate(prevProps, prevState) {
    const { active } = this.state;
    if ((active !== prevState.active) && (this.state.active === true)) {
      const timer = () => {setTimeout(() => this.setState({ active: false }), 1720)}
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
