import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

class Title extends Component {
  render() {
    const { title, binary } = this.props.project;
    return (
      <div className='project-title'>
        <div className='container mt-4'>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='d-flex'>
                  <div className='m-auto project-title-main-title' id='project-title'>
                      <div className='d-flex'>
                        <h3 className={classnames(`text-center m-auto`, { 'slideInRight': title })} >
                          <span className='text-center m-auto'>My Recent</span>
                        </h3>
                        <span className={classnames(`project-title-div-heading ml-2 mb-0`, {'slideInLeft': title})}>Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='d-flex'>
                  <div className={classnames(`project-title-subtitle m-auto`, {'fadeInUp': binary })} id='project-binary' >
                    <p className='mb-0'>01101101 01111001</p>
                    <p className='mb-0'>01110010 01100101 01100011 01100101 01101110 01110100</p>
                    <p className='mb-0'>01110000 01110010 01101111 01101010 01100101 01100011 01110100 01110011</p>
                  </div>
                </div>  
              </div>
            </div>
        </div>
      </div>
    );
  };
};

Title.propTypes = {
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {})(Title);