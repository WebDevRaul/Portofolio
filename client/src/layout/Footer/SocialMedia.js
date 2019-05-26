import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SocialMedia extends Component {
  render() {
    return (
      <div className='social-media-div'>
        <div className='row no-gutters mb-3'>
          <div className='col'>
            <h4 className='social-media-h4'>Social <span className='social-media-h4-border'>Media</span></h4>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='d-flex m-auto'>
              <div className='social-media d-flex m-auto' >
                <span className='d-flex m-auto'>
                  <NavLink to={'/'} target='_blank'>
                    <i className='fab p-2 fa-facebook-f fa-1x'></i>
                  </NavLink>
                </span>
              </div>
              <div className='social-media d-flex m-auto' >
                <span className='d-flex m-auto'>
                  <NavLink to={'/'} target='_blank'>
                    <i className='fab fa-twitter fa-1x'></i>
                  </NavLink>
                </span>
              </div>
              <div className='social-media d-flex m-auto' >
                <span className='d-flex m-auto'>
                  <NavLink to={'/'} target='_blank'>
                    <i className='fab fa-instagram fa-1x'></i>
                  </NavLink>
                </span>
              </div>
              <div className='social-media d-flex m-auto' >
                <span className='d-flex m-auto'>
                  <NavLink to={'/'} target='_blank'>
                    <i className='fab fa-linkedin-in fa-1x'></i>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
