import React, { Component } from 'react';
import classnames from 'classnames';

export default class Border extends Component {
  render() {
    const { border, move, display } = this.props.border;
    return (
      <div className={classnames('border-div', {
        'animation-border': border, 
        'hide': move, 
        'animation-border-back': display
        })}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  }
}
