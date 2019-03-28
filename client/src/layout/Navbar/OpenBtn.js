import React, { Component } from 'react';
import classnames from 'classnames';

export default class OpenBtn extends Component {
  render() {
    const { move, first, second, third } = this.props.openBtn;
    return (
      <div className='i-div'>
        <i className={classnames("", { 'animation': move, 'hide' : first })} ></i>
        <i className={classnames("mt-2", { 'animation-two': move, 'hide' : second })}></i>
        <i className={classnames("mt-3", { 'animation-tree': move, 'hide' : third })}></i>
      </div>
    )
  }
}
