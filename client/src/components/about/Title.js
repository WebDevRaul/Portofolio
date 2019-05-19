import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_hide_div: false
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { title_hide_div } = this.state;
    const { title } = this.props.about;
    const scrollToTop = document.documentElement.scrollTop;

    // Hide div on animation
    if ((prevProps.about.title !== title) && !title_hide_div) {
      setTimeout(() => this.setState({ title_hide_div: true }),620);
    };
    if (prevState.title_hide_div !== title_hide_div) {
      this.setState({ title_hide_div: false });
    }
  };
  render() {
    const { title } = this.props.about;
    const { title_hide_div } = this.state;
    return (
      <div className='row no-gutters' id='title'>
        <div className='col title-background-skew'>
          <div className='title text-center'>
            <div className='row mb-3 mt-3 no-gutters'>
              <div className='col'>
                <div className='title-div m-auto div-animation'>
                  <i className={classnames('', {'border-animation': title})}></i>
                  <i className={classnames('text-hide-div', {'hide': !title_hide_div})}></i>
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