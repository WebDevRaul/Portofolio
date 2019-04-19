import React, { Component } from 'react';

// Common
import Circle from '../common/Circle';

// Img
import Computer from '../../assets/Computer';

export default class Responsive extends Component {
  render() {
    const rem = '10em';
    return (
      <div className='ml-5'>
        <Computer width={rem} height={rem} />
      </div>
    )
  }
}
