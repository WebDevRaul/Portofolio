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
      move: false,
      first: false,
      second: false,
      third: false,
    }
  }

  onClick = () => {
    // const timer = setTimeout(() => {this.setState({ show: !this.state.show })}, 2000);
    this.setState({ move: !this.state.move });

    // // Make btn lines to move and disapear
    const func = (data, seconds) => {
      const timer = setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
    };
    func('first', 500)
    func('second', 700);
    func('third', 1000);

   };

  render() {
    
    const { show, move, first, second, third } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <div 
          className='btn-div btn'
          onClick={this.onClick}
        >
          <div className='i-div'>
            <i className={classnames("", { 'animation': move, 'display' : first })} ></i>
            <i className={classnames("mt-2", { 'animation-two': move, 'display' : second })}></i>
            <i className={classnames("mt-3", { 'animation-tree': move, 'display' : third })}></i>
          </div>
        </div>
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