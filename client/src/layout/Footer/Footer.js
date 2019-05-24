import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer bg-dark text-white'>
        <div className='row no-gutters'>
          <div className='col m-auto'>
            <div className='text-center'>
              <span>Copyright &copy; {new Date().getFullYear()} <span className='ml-2 mr-2'>by</span> Savin Raul-Calin</span>
            </div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <div>
              <span className='ml-2 mr-2'>
                <NavLink to={'/'} target='_blank'>
                  <i className='m-2 fab fa-facebook-f fa-1x'></i>
                </NavLink>
              </span>
              <span className='ml-2 mr-2'>
                <NavLink to={'/'} target='_blank'>
                  <i className='m-2 fab fa-twitter fa-1x'></i>
                </NavLink>
              </span>
              <span className='ml-2 mr-2'>
                <NavLink to={'/'} target='_blank'>
                  <i className='m-2 fab fa-instagram fa-1x'></i>
                </NavLink>
              </span>
              <span className='ml-2 mr-2'>
                <NavLink to={'/'} target='_blank'>
                  <i className='m-2 fab fa-linkedin-in fa-1x'></i>
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}