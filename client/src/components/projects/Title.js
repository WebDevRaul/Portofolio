import React, { Component } from 'react';

// Css
import '../../css/project.css';

export default class Title extends Component {
  render() {
    return (
      <div className='project-title'>
        <div className='container'>
          <div className='project-title-div'>
            <div>
              <span className='test'>My Recent Projects</span>
              <p>Here are a few recent design projects.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
