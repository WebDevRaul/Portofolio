import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { active } = this.props;
    return (
      <div className='title text-center mb-4'>
        <div className='row mb-5 mt-5 no-gutters'>
          <div className='col'>
            <div className='title-div m-auto div-animation'>
              <i className='border-animation'></i>
              <i className={classnames('text-hide-div', {'hide': !active})}></i>
              <h3 className='d-flex title-text-center'>
                <span className='title-text title-animation m-auto'>About Me</span>
              </h3>
              <i className='border-animation'></i>
            </div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='subtitle-div text-uppercase mb-4'>
              <div className='subtitle-text'>
                <span>A</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
                <span>w</span>
                <span className='space'></span>
                <span>m</span>
                <span>e</span>
                <span className='space'></span>
                <span>t</span>
                <span>o</span>
                <span className='space'></span>
                <span>i</span>
                <span>n</span>
                <span>t</span>
                <span>r</span>
                <span>o</span>
                <span>d</span>
                <span>u</span>
                <span>c</span>
                <span>e</span>
                <span className='space'></span>
                <span>m</span>
                <span>y</span>
                <span>s</span>
                <span>e</span>
                <span>l</span>
                <span>f</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

Title.propTypes = {
  active: PropTypes.bool.isRequired
};


export default Title;