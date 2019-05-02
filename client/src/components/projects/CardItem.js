import React, { Component } from 'react'

class CardItem extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className='cardItem'>
        <img src={data.picture} alt=''/>
      </div>
    )
  }
}


export default CardItem;