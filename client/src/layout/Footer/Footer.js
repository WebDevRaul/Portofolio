import React, { Component } from 'react';

// Components
import Form from './Form';
import MapViewer from './MapViewer';
import SocialMedia from './SocialMedia';

// Css
import '../../css/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer bg-dark text-white'>
        <div className='row no-gutters pt-3 pl-2 pr-2'>
          <div className='col-12 col-sm-6 m-auto'>
            <MapViewer />
          </div>
          <div className='col-12 col-sm-6'>
            <Form />
          </div>
        </div>
        <div className='row no-gutters mt-3 mb-3'>
          <div className='col-12 col-sm-6'>
            
          </div>
          <div className='col-12 col-sm-6'>
            <SocialMedia />
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col m-auto'>
            <div className='text-center m-3'>
              <span>Copyright &copy; {new Date().getFullYear()} <span className='ml-2 mr-2'>by</span> Savin Raul-Calin</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
};