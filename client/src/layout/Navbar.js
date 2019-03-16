import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import Logo from './Logo';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }
  }

  onClick = () => { this.setState({ show: !this.state.show }); };

  render() {

    const { show } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button
          className="navbar-toggler" 
          type="button"
          onClick={this.onClick}  
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
          <ul className='navbar-nav ml-auto mr-5'>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/home' 
              className='nav-link'
              activeClassName="active"
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