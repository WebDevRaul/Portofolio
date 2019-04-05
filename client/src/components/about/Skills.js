import React from 'react';

// Common
import Circle from '../common/Circle';

// Img
import Redux from '../../assets/Redux';
import MongoDB from '../../assets/MongoDB';
import NodeJs from '../../assets/NodeJs';
import PostgreSQL from '../../assets/PostgreSQL';
import ReactJs from '../../assets/ReactJs';
import JQuery from '../../assets/JQuery';
import Html from '../../assets/Html';
import Css from '../../assets/Css';
import Javascript from '../../assets/Javascript';

export default function Skills() {
  const rem = '3rem';
  return (
    <div className='skills'>
      <div className='row no-gutters'>
        <div className='col'>
          <div className='row no-gutters'>
            <div className='col-md-6'>
              <div className='row no-gutters'>
                <div className='col-sm-6'>
                  <div className='d-flex'>
                    <Circle svg={<Html width={rem} height={rem} />} text='Html 5' />
                    <Circle svg={<Css width={rem} height={rem} />} text='Css 3' />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='d-flex'>
                    <Circle svg={<Javascript width={rem} height={rem} />} text='Javascript' />
                    <Circle svg={<JQuery width={rem} height={rem} />} text='JQuery' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row no-gutters'>
                <div className='col-sm-6'>
                  <div className='d-flex'>
                    <Circle svg={<ReactJs width={rem} height={rem} />} text='ReactJs' />
                    <Circle svg={<Redux width={rem} height={rem} />} text='Redux' />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='d-flex'>
                    <Circle svg={<MongoDB height={rem} width='5.5rem' />} text='MongoDB' />
                    <Circle svg={<NodeJs height={rem} width='5.5rem' />} text='NodeJs' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col-md-6'>
              <div className='row no-gutters'>
                <div className='col-sm-6'>
                  <div className='d-flex'>
                    <Circle svg={<PostgreSQL height={rem} width={rem} />} text='PostgreSQL' />
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}