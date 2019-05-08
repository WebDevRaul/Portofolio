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
        <img src={picture} alt=''/>
      </div>
    )
  }
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClickProp: PropTypes.func
};