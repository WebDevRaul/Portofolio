import React, { Component } from 'react';
import classnames from 'classnames';

export default class CloseBtn extends Component {
  render() {
    const { display } = this.props.closeBtn;
    return (
      <div className={classnames('p-div', {
        'hide': !display,
        'animation-close': true 
        })}>
        <p></p>
        <p></p>
      </div>
    )
  }
}
