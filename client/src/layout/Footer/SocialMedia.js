import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SocialMedia extends Component {
  render() {
    return (
      <div className='social-media-div d-flex'>
        <div className='m-auto'>
          <div className='social-media d-flex m-auto' >
            <span className='d-flex m-auto'>
              <NavLink to={'/'} target='_blank'>
                <i className='fab p-2 fa-facebook-f fa-1x'></i>
              </NavLink>
            </span>
          </div>
        </div>
        <div className='m-auto'>
          <div className='social-media d-flex m-auto' >
            <span className='d-flex m-auto'>
              <NavLink to={'/'} target='_blank'>
                <i className='fab fa-twitter fa-1x'></i>
              </NavLink>
            </span>
          </div>
        </div>
        <div className='m-auto'>
          <div className='social-media d-flex m-auto' >
            <span className='d-flex m-auto'>
              <NavLink to={'/'} target='_blank'>
                <i className='fab fa-instagram fa-1x'></i>
              </NavLink>
            </span>
          </div>
        </div>
        <div className='m-auto'>
          <div className='social-media d-flex m-auto' >
            <span className='d-flex m-auto'>
              <NavLink to={'/'} target='_blank'>
                <i className='fab fa-linkedin-in fa-1x'></i>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    );
  };
};
