import React, { Component } from 'react';

// Css
import '../../css/project.css';

export default class Title extends Component {
  render() {
    return (
      <div className='project-title'>
        <div className='container bg-white'>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='d-flex'>
                  <div className='m-auto project-title-main-title'>
                      <div className='d-flex'>
                        <h5 className='text-center m-auto'>My Recent</h5><span className='project-title-div-heading ml-2 mb-0'>Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='d-flex'>
                  <div className='project-title-subtitle m-auto'>
                    <p className='mt-4 m-0'>Here are a few recent design projects.</p>  
                  </div>
                </div>  
              </div>
            </div>
        </div>
      </div>
    )
  }
}
