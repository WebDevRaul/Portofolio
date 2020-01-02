import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

// Common
import Circle from '../common/Circle';

// Assests
import Logo from '../../assets/skills/Logo';

class Skills extends Component {
  render() {
    const rem = '3em';
    const { skills } = this.props.about;    
  return (
    <div className='text-center skills' id='skills'>
      <div className=''>
        <div className='row no-gutters'>
          <div className='col'>
            <p className={classnames('', {'zoomIn': skills, 'opacity': !skills})}>Up to the present moment I have gained experience in the following:</p> 
            <div className={classnames('', {'fadeInUp': skills, 'opacity': !skills})}>
              <div className='row no-gutters'>
                <div className='col-lg-8 offset-lg-2'>
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
                  <div className='row no-gutters'>
                    <div className='col-md-12'>
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
                            <Circle svg={<Logo.Sass height={rem} width={rem} />} text='Sass' />
                            <Circle svg={<Logo.GraphQl height={rem} width={rem} />} text='GraphQl' />
                            <Circle svg={<Logo.Gatsby height='5em' width='5em' />} text='Gatsby' />
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
      </div>
    </div>
    );
  };
};

Skills.propTypes = {
  about: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, {})(Skills);