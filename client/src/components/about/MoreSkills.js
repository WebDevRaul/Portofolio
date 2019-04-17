import React, { Component } from 'react';

// Circle
import Circle from '../common/Circle';

// Assests
import Boostrap from '../../assets/Boostrap';
import Github from '../../assets/Github';

export default class MoreSkills extends Component {
  render() {
    const rem = '3em';
    const { slideUp } = this.props;
    return (
      <div className='more-skills'>
        <div className={slideUp} data-wow-duration="1500ms" data-wow-delay="1s">
          <div className='row no-gutters'>
            <div className='col'>
              <p className='more-skills-title'>More Skills:</p>
            </div>
          </div>
          <div className='row no-gutters text-center'>
            <div className='col'>
              <div className='row no-gutters'>
                <div className='col-md-6'>
                  <div className='row no-gutters'>
                    <div className='col-sm-6'>
                      <div className='d-flex'>
                        <Circle svg={<Github width={rem} height={rem} />} text='Github' />
                        <Circle svg={<Boostrap width={rem} height={rem} />} text='Boostrap 4' />
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
