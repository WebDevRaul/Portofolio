import React, { Component } from 'react';

// Components
import Responsive from './Responsive';

// Css
import '../../css/home.css';

class Home extends Component {
  render() {
    return (
      <div className='home pt-5' id='home'>
        <div className='row no-gutters'>
            <div className='col'>
              <div className='container-fluid mt-5 mb-5'>
                <Responsive />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home;