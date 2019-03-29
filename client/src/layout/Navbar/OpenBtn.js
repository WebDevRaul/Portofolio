import React, { Component } from 'react';
import classnames from 'classnames';

export default class OpenBtn extends Component {
  render() {
    const { hide, first, second, third } = this.props.openBtn;
    return (
      <div className='open-div'>
        <i className={classnames("", { 'animation': hide, 'hide' : first, })} ></i>
        <i className={classnames("mt-2", { 'animation-two': hide, 'hide' : second })}></i>
        <i className={classnames("mt-3", { 'animation-tree': hide, 'hide' : third })}></i>
      </div>
    )
  }
}
