import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className='about-me text-center'>
        <div className='row'>
          <div className='col-md-5'>
            photo here
          </div>
          <div className='col col-md-7'>
            <div className='about-me-bio'>
              <p>
                <span className='about-me-first-letter'>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default AboutMe;