import React, { Component } from 'react';

// Circle
import Circle from '../common/Circle';

// Assests
import Logo from '../../assets/skills/Logo';

export default class MoreSkills extends Component {
  render() {
    const rem = '3em';
    const { slideUp } = this.props;
    return (
      <div className='more-skills' id='more-skills'>
        <div className={slideUp} data-wow-duration="1500ms" data-wow-delay="1s">
          <div className='row no-gutters'>
            <div className='col m-auto d-flex'>
              <p className='more-skills-title m-auto d-flex'>More skills:</p>
            </div>
          </div>
          <div className='row no-gutters text-center'>
            <div className='col d-flex'>
              <div className='row no-gutters m-auto'>
                <div className='col-md-6'>
                  <div className='row no-gutters'>
                    <div className='col-sm-6'>
                      <div className='d-flex'>
                        <span className='m-2'><Circle svg={<Logo.Bootstrap width={rem} height={rem} />} text='Github' /></span>
                        <span className='m-2'><Circle svg={<Logo.Github width={rem} height={rem} />} text='Boostrap 4' /></span>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex'>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='row no-gutters'>
                    <div className='col-sm-6'>
                      <div className='d-flex'>
                        
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex'>
                        
                      </div>
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
