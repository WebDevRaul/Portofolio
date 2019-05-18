import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

// Circle
import Circle from '../common/Circle';

// Assests
import Logo from '../../assets/skills/Logo';

class MoreSkills extends Component {
  render() {
    const rem = '3em';
    const { more_skills } = this.props.about;
    return (
      <div className='more-skills' id='more-skills'>
        <div className={classnames('', {'fadeInUp': more_skills, 'opacity': !more_skills})}>
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
    );
  };
};

MoreSkills.propTypes = {
  about: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, {})(MoreSkills)