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
                        <h5 className={classnames(`text-center m-auto ${slideLeft}`)} data-wow-delay="1s">
                          <span className='text-center m-auto'>My Recent</span>
                        </h5>
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
                    <p className='mt-3 m-0'>Here are a few recent design projects.</p>  
                  </div>
                </div>  
              </div>
            </div>
        </div>
      </div>
    )
  }
}
