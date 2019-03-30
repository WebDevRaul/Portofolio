import React, { Component } from 'react';
import classnames from 'classnames';

export default class OpenBtn extends Component {
  render() {
    const { openBorder, first, second, third, firstBack } = this.props.openBtn;
    console.log('firstBack', firstBack);
    return (
      <div className='open-div'>
        <i className={classnames("", { 'animation': openBorder, 'hide' : first, 'animationBack' : firstBack })} ></i>
        <i className={classnames("mt-2", { 'animation-two': openBorder, 'hide' : second, 'animationBack-two': firstBack })}></i>
        <i className={classnames("mt-3", { 'animation-tree': openBorder, 'hide' : third, 'animationBack-tree': firstBack })}></i>
      </div>
    )
  }
}
