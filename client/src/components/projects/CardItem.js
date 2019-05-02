import React, { Component } from 'react';
import clasnames from 'classnames'; 

class CardItem extends Component {

  onClick = id => () => {
    this.props.onClickCardItem(id)
  }

  render() {
    const { picture, title, summary, skills, link, linkName, id } = this.props.data;
    const { cardItem } = this.props;
    return (
      <div className='cardItem' onClick={this.onClick(id)}  id={`cardItem-${id}`}>
        <img src={picture} alt=''/>
        <div className={clasnames('hide cardItemInfo', {'show': cardItem})}>
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