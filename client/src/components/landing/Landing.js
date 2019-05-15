import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter } from "react-router-dom";

// Animation
import WOW from "wow.js";

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
    }
  };

  componentDidMount() {
    // Init the WOW
    const wow = new WOW();
    wow.init();
    // Start interval
    this.interval = setInterval(() => this.setState({ number: this.state.number + 1 }), 10);
  };

  componentDidUpdate() {
    const { number, cicle, hide, show, web } = this.state;
    // Clear interval when reach 100
    if (number === 100) {
      clearInterval(this.interval);
    };
    // Start animation
    if ((number === 100) && (cicle === false)) {
      this.setState({ cicle: true })
    };
    // Hide loading after finish
    if (cicle) {
      setInterval(() => this.setState({ hide: true }), 2001);
    };
    // Show fullStack text
    if (hide) {
      setInterval(() => this.setState({ show: true }),1500);
    }
    // Show webDeveloper text
    if (show) {      
      setInterval(() => this.setState({ web: true }),1000);
    }
    // Show level
    if (web) {
      setInterval(() => this.setState({ level: true }),1000);
    }
    // Redirect on home when cicle i complete
    // if (number === 100) {
    //     setInterval(() => this.props.history.push('/home'), 2000);
    //   }
    };
    
    render() {
      
    const { number, cicle, hide, show, web, level } = this.state;

    const fullStack = (
      <div className='m-auto d-flex'>
        <div className='sizeDown d-flex'>
          F
          <span className={classnames('', {'show mr-3': show, 'hide': !show})}>ull</span>
        </div>
        <div className='sizeDown d-flex'>
          S
          <span className={classnames('', {'show': show, 'hide': !show})}>tack</span>
        </div>
      </div>
    );

    const webDeveloper = (
      <div className='m-auto d-flex landing-web-developer'>
        <div className={classnames('landing-web slide-in-right', {'show': web, 'hide': !web})}>
          <p className='mb-0'>Web</p>
        </div>
        <div className={classnames('landing-web slide-in-left', {'show': web, 'hide': !web})}>
          <p className='mb-0 mr-3'>Developer</p>
        </div>
      </div>
    );

    const levelIntermediate = (
      <div className={classnames('text-center landing-level fadeIn', {'show': level, 'hide': !level})}>
        <p className='mb-0'>Level: intermediate</p>
      </div>
    );

    return (
      <div className='landing'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col'>
              <div className='landing-loading d-flex'>
                <div className='m-auto'>
                  <div className='landing-text-background rollUp d-flex'></div>
                  <div className='m-auto'>
                    <div className={classnames('landing-intro-div d-flex', { 'hide': !hide })}>
                      <div className='m-auto'>
                        <div className='row no-gutters'>
                          <div className='col d-flex'>
                            {fullStack}
                          </div>
                        </div>
                        <div className='row no-gutters'>
                          <div className='col d-flex'>
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
                  </div>
                  <h1 className={classnames('m-auto', {'fadeUp':cicle, 'hide': hide})}>
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