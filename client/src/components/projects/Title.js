import React, { Component } from 'react';

// Css
import '../../css/project.css';

export default class Title extends Component {
  render() {
    return (
      <div className='project-title'>
        <div className='container'>
          <div className='d-flex bg-white'>
            <div className='m-auto project-title-div'>
              <h5 className='mb-0 text-center'>My Recent<span className='project-title-div-heading ml-2 mb-0'>Projects</span></h5>
              <p className='mt-4 m-0'>Here are a few recent design projects.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
