import React, { Component } from 'react';
import classnames from 'classnames';

export default class CloseBtn extends Component {
  render() {
    const { openButton, closeButton, hideButton } = this.props.closeBtn;
    return (
      <div className={classnames('p-div', {
        'hide': hideButton,
        'animation-close': openButton,
        'animation-close-back': closeButton,
        })}>
        <p></p>
        <p></p>
      </div>
    )
  }
}
