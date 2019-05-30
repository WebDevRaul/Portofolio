import React, { Component } from 'react';

// Components
import Responsive from './Responsive';

// Css
import '../../css/home.css';

class Home extends Component {
  render() {
    return (
      <div className='home pt-5' id='home'>
        <div className='div-center'>
          <div className='row no-gutters'>
            <div className='col'>
              <Responsive />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;