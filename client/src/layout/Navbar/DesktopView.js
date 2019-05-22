import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


class DesktopView extends Component {

  onClick = id => () => {
    this.props.onClick();
    const el = document.querySelector(id);
    el.scrollIntoView();
  }
  render() {
    const { show } = this.props;
    return (
      <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
        <ul className='navbar-nav ml-auto mr-5'>
          <li className="nav-item mr-3">
            <span 
              className='nav-link' 
              onClick={this.onClick('#home')}
            >Home</span>
          </li>
          <li className="nav-item mr-3">
            <span className='nav-link' onClick={this.onClick('#projects')}>Projects</span>
          </li>
          <li className="nav-item mr-3">
            <span className='nav-link' onClick={this.onClick('#about')}>About</span>
          </li>
        </ul>
      </div>
    )
  }
};

DesktopView.propTypes = {
  onClick: PropTypes.func.isRequired,
}


export default DesktopView;