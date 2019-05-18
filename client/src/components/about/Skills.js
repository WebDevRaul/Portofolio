import React, { Component } from 'react';

// Common
import Circle from '../common/Circle';

// Assests
import Logo from '../../assets/skills/Logo';

export default class Skills extends Component {
  render() {
    const rem = '3em';
    const { slideUp, zoomIn } = this.props;    
  return (
    <div className='text-center skills' id='skills'>
      <div className='bg-skew'>
        <div className='row no-gutters'>
          <div className='col'>
            <p className={zoomIn} data-wow-duration="1500ms" data-wow-delay="700ms">Up to the present moment I have gained experience in the following:</p> 
            <div className={slideUp} data-wow-duration="1500ms" data-wow-delay="700ms">
              <div className='row no-gutters'>
                <div className='col-lg-5 offset-lg-2'>
                  <div className='row no-gutters'>
                    <div className='col-md-12'>
                      <div className='row no-gutters'>
                        <div className='col-sm-6'>
                          <div className='d-flex'>
                            <Circle svg={<Logo.Html width={rem} height={rem} />} text='Html 5' />
                            <Circle svg={<Logo.Css width={rem} height={rem} />} text='Css 3' />
                            <Circle svg={<Logo.Javascript width={rem} height={rem} />} text='Javascript' />
                          </div>
                        </div>
                        <div className='col-sm-6'>
                          <div className='d-flex'>
                            <Circle svg={<Logo.JQuery width={rem} height={rem} />} text='JQuery' />
                            <Circle svg={<Logo.ReactJs width={rem} height={rem} />} text='ReactJs' />
                            <Circle svg={<Logo.Redux width={rem} height={rem} />} text='Redux' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className='col'>
                    <div className='row no-gutters'>
                      <div className='col-sm-6'>
                        <div className='d-flex'>
                          <Circle svg={<Logo.NodeJs height={rem} width='5.5em' />} text='NodeJs' />
                          <Circle svg={<Logo.MongoDB height={rem} width='5.5em' />} text='MongoDB' />
                          <Circle svg={<Logo.PostgreSQL height={rem} width={rem} />} text='PostgreSQL' />
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
    </div>
    )
  }
}
