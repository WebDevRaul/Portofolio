import React, { Component } from 'react';
import clasnames from 'classnames'; 

class CardItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      active: false,
    }
  }

  onMouseEnter = () => {
    this.setState({ hover: true })
  }

  onMouseLeave = () => {
    this.setState({ hover: false })
  }


  render() {
    const { picture, title, summary, skills, link, linkName, id } = this.props.data;
    const { hover, active } = this.state;
    return (
      <div 
        className='cardItem' 
        id={`cardItem-${id}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        >
        <img src={picture} alt=''/>
        <div className={clasnames('hide cardItemInfo', {'show': hover || active})}>
            <div className='cardInfoDiv'>
              <h5 className='cardInfoTitle pb-1'>{title}</h5>
              <p>{summary}</p>
              <p>{skills}</p>
              <p><a href={link} target='_blank' rel="noopener noreferrer">{linkName}</a></p>
            </div>
        </div>
      </div>
    )
  }
}


export default CardItem;