import React, { Component } from 'react';
import classnames from 'classnames';

export default class Border extends Component {
  render() {
    const { openBorder, hideBorder, closeBorder } = this.props.border;
    return (
      <div className={classnames('border-div', {
        'animation-border': openBorder, 
        'hide': hideBorder, 
        'animation-border-back': closeBorder
        })}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  }
}
