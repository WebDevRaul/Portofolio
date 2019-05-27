import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

// Components
import Responsive from './Responsive';

// Css
import '../../css/home.css';

class Home extends Component {

  onClick = () => {
    window.location.href = '/';
  }
  render() {
    return (
      <div className='home' id='home'>
        <div className='row no-gutters'>
            <div className='col'>
              <div className='container mt-5'>
                <Responsive />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Home);