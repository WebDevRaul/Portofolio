import React, { Component } from 'react';

// Data
import Data from '../../assets/projects/data';

// Component
import CardItem from './CardItem';

class ProjectCard extends Component {
  render() {
    const card = Data.map(i => <CardItem key={i.id} data={i} />);
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