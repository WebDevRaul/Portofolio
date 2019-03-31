import React, { Component } from 'react';
import classnames from 'classnames';

export default class OpenBtn extends Component {
  render() {
    const { openBorder, hideFirst, hideSecond, hideThird, returnAnimation } = this.props.openBtn;
    return (
      <div className='open-div'>
        <i className={classnames("", { 'animation': openBorder, 'hide' : hideFirst, 'animationBack' : returnAnimation })} ></i>
        <i className={classnames("mt-2", { 'animation-two': openBorder, 'hide' : hideSecond, 'animationBack-two': returnAnimation })}></i>
        <i className={classnames("mt-3", { 'animation-tree': openBorder, 'hide' : hideThird, 'animationBack-tree': returnAnimation })}></i>
      </div>
    )
  }
}
