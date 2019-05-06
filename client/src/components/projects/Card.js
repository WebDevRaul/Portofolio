import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {

  onClick = id => () => {
    this.props.onClickProp(id)
  }
  render() {
  const { id, picture } = this.props.card;
    return (
      <div 
        id={`card-${id}`} 
        className="card-slider" 
        onClick={this.onClick(id)}
        >
        <img src={picture} className='m-auto' alt=''/>
      </div>
    )
  }
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  onClickProp: PropTypes.func
};