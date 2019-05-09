import React, { Component } from 'react'

// Components
import CardItem from './CardItem';

// Data
import Data from '../../assets/projects/data';

class ProjectCard extends Component {

  onScrollToCard = (ref, id) => {
    this.props.onScrollToCard(ref, id);
  }
  render() {
    const card = Data.map(i => <CardItem key={i.id} data={i} onScrollToCard={this.onScrollToCard}/>);
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