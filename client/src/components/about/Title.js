import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class Title extends Component {
  render() {
    const { title, title_hide_div } = this.props.about;
    return (
      <div className='row no-gutters' id='title'>
        <div className='col title-background-skew'>
          <div className='title text-center'>
            <div className='row mb-3 mt-3 no-gutters'>
              <div className='col'>
                <div className='title-div m-auto div-animation'>
                  <i className={classnames('', {'border-animation': title})}></i>
                  <i className={classnames('text-hide-div', {'hide': title_hide_div})}></i>
                  <h3 className='d-flex title-text-center'>
                    <span className='title-text title-animation m-auto'><span>About</span> Me</span>
                  </h3>
                  <i className={classnames('', {'border-animation': title})}></i>
                </div>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='subtitle-div text-uppercase mb-4'>
                  <div className={classnames('', {'subtitle-text': title})}>
                    <span>A</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>
                    <span>w</span>
                    <span className='space'></span>
                    <span>m</span>
                    <span>e</span>
                    <span className='space'></span>
                    <span>t</span>
                    <span>o</span>
                    <span className='space'></span>
                    <span>i</span>
                    <span>n</span>
                    <span>t</span>
                    <span>r</span>
                    <span>o</span>
                    <span>d</span>
                    <span>u</span>
                    <span>c</span>
                    <span>e</span>
                    <span className='space'></span>
                    <span>m</span>
                    <span>y</span>
                    <span>s</span>
                    <span>e</span>
                    <span>l</span>
                    <span>f</span>
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

Title.propTypes = {
  about: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, {})(Title);