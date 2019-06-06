import React, { Component } from 'react';

// Components
import Form from './Form';
import MapViewer from './MapViewer';
import SocialMedia from './SocialMedia';
import Logo from '../Logo';

// Css
import '../../css/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer bg-dark text-white' id='footer'>
        <div className='row no-gutters pt-3 pl-2 pr-2'>
          <div className='col-12 col-sm-6 m-auto'>
            <MapViewer />
          </div>
          <div className='col-12 col-sm-6'>
            <Form />
          </div>
        </div>
        <div className='row no-gutters mt-3 mb-3'>
          <div className='col'>
            <SocialMedia />
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-6'>
            <div className='d-flex mt-4'>
              <div className='m-auto'>
                <Logo />
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 d-flex pt-4 pb-4'>
            <div className='text-center m-auto copy-right'>
              <span>- - Copyright &copy; {new Date().getFullYear()} <span className='ml-1 mr-1'>by</span> Savin Raul-Calin - -</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
};