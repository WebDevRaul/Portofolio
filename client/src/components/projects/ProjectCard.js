import React from 'react';

// Components
import CardItem from './CardItem';

// Data
import Data from '../../assets/projects/data';

export default function ProjectCard() {
  
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
