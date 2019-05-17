import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter } from "react-router-dom";

// Css
import '../../css/landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      cicle: false,
      hide: false,
      show: false,
      web: false,
      level: false,
      turn: false
    }
  };

  componentDidMount() {
    // Start interval
    this.interval = setInterval(() => this.setState({ number: this.state.number + 1 }), 10);
  };

  componentDidUpdate(prevProps, prevState) {
    const { number, cicle, hide, show, web, level } = this.state;
    // Clear interval when reach 100
    if (number === 100) {
      clearInterval(this.interval);
    };
    // Start animation
    if ((number === 100) && (cicle === false)) {
      this.setState({ cicle: true });
      // Hide loading after finish
      setInterval(() => this.setState({ hide: true }), 3300);
    };
    // Show fullStack text
    if (prevState.hide !== hide) {
      setInterval(() => this.setState({ show: true }),1500);
    }
    // Show webDeveloper text
    if (prevState.show !== show) {      
      setInterval(() => this.setState({ web: true }),1000);
    }
    // Show levelIntermediate
    if (prevState.web !== web) {
      setInterval(() => this.setState({ level: true }),1000);
    }
    // Turn card
    if (prevState.level !== level) {
      setInterval(() => this.setState({ turn: true }),2000);
    }
    // Redirect on home when cicle i complete
    // if (number === 100) {
    //     setInterval(() => this.props.history.push('/home'), 2000);
    //   }
    };
    
    render() {
  
    const { number, cicle, hide, show, web, level, turn } = this.state;

    const fullStack = (
      <div className={classnames('d-flex landing-full-stack', { 'hide': !hide })}>
        <div className='d-flex ml-auto'>
          <span className='scaleDown'>F</span>
          <span className={classnames('', {'show mr-3': show, 'hide': !show})}>ull</span>
        </div>
        <div className='d-flex mr-auto'>
          <span className='scaleDown'>S</span>
          <span className={classnames('', {'show': show, 'hide': !show})}>tack</span>
        </div>
      </div>
    );

    const webDeveloper = (
      <div className={classnames('d-flex landing-web-developer', { 'hide': !web })}>
        <div className='d-flex ml-auto'>
          <span className='slide-in-left'>Web</span>
        </div>
        <div className='d-flex mr-auto'>
          <span className='slide-in-right ml-3'>Developer</span>
        </div>
      </div>
    );

    const levelIntermediate = (
      <div className={classnames('d-flex landing-level', { 'hide': !level })}>
        <div className='d-flex'>
          <span className='fadeIn'>Level: intermediate</span>
        </div>
      </div>
    );

    return (
      <div className='landing'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col d-flex'>
              <div className='m-auto'>
                <div className={classnames('landing-loading-card d-flex expandUp', {'rotate': turn})}>
                  <div className='m-auto'>
                    <div className='row no-gutters'>
                      <div className='col m-auto'>
                        {fullStack}
                      </div>
                    </div>
                    <div className='row no-gutters'>
                      <div className='col'>
                        {webDeveloper}
                      </div>
                    </div>
                    <div className='row no-gutters'>
                      <div className='col'>
                        {levelIntermediate}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='landing-number-div'>
                  <h1 className={classnames('', {'fadeUp':cicle, 'hide': hide})}>
                    <span>{number} %</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Landing)