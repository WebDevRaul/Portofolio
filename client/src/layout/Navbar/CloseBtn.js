import React, { Component } from 'react';
import classnames from 'classnames';

export default class CloseBtn extends Component {
  render() {
    const { openButton, closeButton } = this.props.closeBtn;
    console.log(openButton)
    return (
      <div className={classnames('p-div', {
        'hide': !openButton ? !openButton : false,
        'animation-close': openButton,
        'animation-close-back': closeButton,
        })}>
        <p></p>
        <p></p>
      </div>
    )
  }
}
