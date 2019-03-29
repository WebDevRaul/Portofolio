import React, { Component } from 'react';
import classnames from 'classnames';

export default class OpenBtn extends Component {
  render() {
    const { openBorder, first, second, third, openBorderBack } = this.props.openBtn;
    return (
      <div className='open-div'>
        <i className={classnames("", {'hide' : first, 'animationBack' : openBorderBack })} ></i>
        <i className={classnames("mt-2", {'hide' : second, 'animationBack-two': openBorderBack })}></i>
        <i className={classnames("mt-3", {'hide' : third, 'animationBack-tree': openBorderBack })}></i>
      </div>
    )
  }
}
