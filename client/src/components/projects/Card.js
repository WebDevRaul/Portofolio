import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {

  onClick = id => () => {
    this.props.onClickProp(id)
  }
  render() {
  const { id, picture } = this.props.property;
    return (
      <div 
        id={`card-${id}`} 
        className="project-card" 
        onClick={this.onClick(id)}
        >
        <img src={picture} alt=''/>
      </div>
    )
  }
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
  onClickProp: PropTypes.func.isRequired
};