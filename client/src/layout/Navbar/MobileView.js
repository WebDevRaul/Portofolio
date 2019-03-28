import React, { Component } from 'react';

// components
import Border from './Border';
import OpenBtn from './OpenBtn';
import CloseBtn from './CloseBtn';

export default class MobileView extends Component {
  render() {
    const { border, openBtn, closeBtn } = this.props;
    return (
      <div>
        <Border border={border} />
        <OpenBtn  openBtn={openBtn} />
        <CloseBtn closeBtn={closeBtn} />
      </div>
    )
  }
}
