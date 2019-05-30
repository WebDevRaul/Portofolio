import React, { Component } from 'react';

// Devices
import Devices from '../../assets/svg/Devices';

export default class Responsive extends Component {
  render() {
    const mac = '13em';
    const ipad = '7em';
    const phone = '5em';
    return (
      <div className='responsive'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-6 d-flex'>
              <div className='responsive-list m-auto'>
                <ul className='fa-ul m-0'>
                  <li>
                    <span class="fa-li" ><i class="fas fa-asterisk"></i></span>
                    <h1 className='mb-0'>Website design</h1></li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6 d-block'>
              <div className='d-flex'>
                <div className='m-auto'>
                  <div className='responive-devices'>
                    <div className='responsive-mac'>
                      <Devices.Mac width={mac} height={mac} />
                      <span>&#123; Responsive &#125;</span>
                    </div>
                    <div className='responsive-ipad-div'>
                      <div className='responsive-ipad'>
                        <Devices.Ipad width={ipad} height={ipad} />
                        <span>Responsive</span>
                      </div>
                    </div>
                    <div className='responsive-phone-div'>
                      <div className='responsive-phone'>
                        <Devices.Phone width={phone} height={phone} />
                        <span>Responsive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className='text-center mt-3'><small>Responsive design that looks great on any device.</small></h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
};