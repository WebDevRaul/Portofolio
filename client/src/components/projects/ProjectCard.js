import React, { Component } from 'react';

// Data
import Data from '../../assets/projects/data';

// Component
import CardItem from './CardItem';

class ProjectCard extends Component {
  constructor() {
    super();
    this.state = {
      cardItem: false
    }
  }

  onClickCardItem = id => {
    this.setState({ cardItem: !this.state.cardItem })
  }

  render() {
    const {cardItem} = this.state;
    const card = Data.map(i => <CardItem key={i.id} data={i} onClickCardItem={this.onClickCardItem} cardItem={cardItem} />);
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