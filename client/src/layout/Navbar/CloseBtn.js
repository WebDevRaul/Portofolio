import React, { Component } from 'react';
import classnames from 'classnames';

export default class CloseBtn extends Component {
  render() {
    const { closeBtn, closeBtnBack } = this.props.closeBtn;
    return (
      <div className={classnames('p-div', {
        'hide': !closeBtn,
        'animation-close-back': closeBtn,
        'animation-close': closeBtnBack,
        })}>
        <p></p>
        <p></p>
      </div>
    )
  }
}
