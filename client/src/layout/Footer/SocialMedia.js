import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SocialMedia extends Component {
  render() {
    return (
      <div className='social-media-div'>
        <div className='row no-gutters mb-1'>
          <div className='col'>
            <h5 className='social-media-h5'>Social <span className='social-media-h5-border'>Media</span></h5>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col d-flex'>
              <div className='d-flex m-auto'>
                <div className='social-media d-flex' >
                  <span className='d-flex m-auto'>
                    <a href='https://www.facebook.com/raul.savin.3' target='_blank' rel="noopener noreferrer">
                      <i className='fab p-2 fa-facebook-f fa-1x'></i>
                    </a>
                  </span>
                </div>
                <div className='social-media d-flex' >
                  <span className='d-flex m-auto'>
                    <NavLink to={'/'} target='_blank'>
                      <i className='fab fa-twitter fa-1x'></i>
                    </NavLink>
                  </span>
                </div>
                <div className='social-media d-flex' >
                  <span className='d-flex m-auto'>
                    <NavLink to={'/'} target='_blank'>
                      <i className='fab fa-instagram fa-1x'></i>
                    </NavLink>
                  </span>
                </div>
                <div className='social-media d-flex' >
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
