import React, { Component } from 'react';
import classnames from 'classnames';

export default class Title extends Component {
  render() {
    const { slideRight, slideLeft, fadeInUp } = this.props;
    return (
      <div className='project-title'>
        <div className='container mt-4'>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='d-flex'>
                  <div className='m-auto project-title-main-title'>
                      <div className='d-flex'>
                        <h3 className={classnames(`text-center m-auto ${slideLeft}`)} data-wow-delay="1s">
                          <span className='text-center m-auto'>My Recent</span>
                        </h3>
                        <span className={classnames(`project-title-div-heading ml-2 mb-0 ${slideRight}`)}  data-wow-delay="1s">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='d-flex'>
                  <div className={classnames(`project-title-subtitle m-auto ${fadeInUp}`)} data-wow-delay="1s">
                    <p className='mb-0'>01101101 01111001</p>
                    <p className='mb-0'>01110010 01100101 01100011 01100101 01101110 01110100</p>
                    <p className='mb-0'>01110000 01110010 01101111 01101010 01100101 01100011 01110100 01110011</p>
                  </div>
                </div>  
              </div>
            </div>
        </div>
      </div>
    )
  }
}
