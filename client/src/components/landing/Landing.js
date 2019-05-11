import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

// Css
import '../../css/landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ number: this.state.number + 1 }), 30);
  };

  componentDidUpdate() {
    const { number } = this.state;
    // Clear interval when reach 100
    if (number === 100) {
      clearInterval(this.interval);
    };
    // Redirect on home when cicle i complete
    // if (number === 100) {
    //   setInterval(() => this.props.history.push('/home'), 2000);
    // }
  };

  render() {
    return (
      <div className='landing'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col'>
              <div className='landing-loading d-flex'>
                <h1 className='m-auto'>{this.state.number} %</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Landing)