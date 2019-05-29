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
            <div className='col'>
              <h5>Responsive Websites ...</h5>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-6 d-flex'>
              <div className='m-auto'>text</div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 d-flex'>
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
          </div>
        </div>
      </div>
    )
  }
}
