import React, { Component } from 'react'

// Components
import CardItem from './CardItem';

// Data
import Data from '../../assets/projects/data';

class ProjectCard extends Component {
  render() {
    const card = Data.map(i => <CardItem key={i.id} data={i} />);
    return (
      <div className='projectCard mb-5'>
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