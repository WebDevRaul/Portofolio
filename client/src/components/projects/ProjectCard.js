import React, { Component } from 'react';

// Data
import Data from '../../assets/projects/data';

// Component
import Card from './Card';

class ProjectCard extends Component {
  render() {
    const card = Data.map(i => <p className='cardItem' key={i.id}>{i.id}</p>);
    return (
      <div className='projectCard'>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='projectCardDiv'>
              {card}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard;