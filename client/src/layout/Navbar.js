import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import Logo from './Logo';

// Css
import '../css/navbar.css'

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }
  }

  onClick = () => { 
    const timer = setTimeout(() => {this.setState({ show: !this.state.show })}, 2000);
   };

  render() {

    const { show } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button
          className="new-icon navbar-toggler" 
          type="button"
          onClick={this.onClick}  
        >
          <i></i>
          <i></i>
          <i></i>
        </button>
        <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
          <ul className='navbar-nav ml-auto mr-5'>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/home' 
              className='nav-link'
              activeClassName='active'
              onClick={this.onClick}
              >
              <span>Home</span>
            </NavLink>
            </li>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/projects' 
              className='nav-link'
              activeClassName="active"
              onClick={this.onClick}
              >
              <span>Projects</span>
            </NavLink>
            </li>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/about' 
              className='nav-link'
              activeClassName="active"
              onClick={this.onClick}
              >
              <span>About</span>
            </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

Navbar.propTypes = {

};

const mapStateToProps = state => ({

});


export default connect(mapStateToProps, {})(withRouter(Navbar))