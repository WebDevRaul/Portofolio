import React from 'react';

// Common
import Circle from '../common/Circle';

// Img
import Github from '../../assets/Github';
import Boostrap from '../../assets/Boostrap';


export default function MoreSkills() {
  const rem = '3rem';
  return (
    <div className='more-skills text-center'>
      <div className='row no-gutters'>
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
  )
}
