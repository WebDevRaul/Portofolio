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
      border: false,
      move: false,
      first: false,
      second: false,
      third: false,
      display: false,
    }
  }

  onButton = () => {
    // const timer = setTimeout(() => {this.setState({ show: !this.state.show })}, 2000);
    this.setState({ border: !this.state.border });

    // // Make btn lines to move and disapear
    const func = (data, seconds) => {
      const timer = setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
    };
    func('move', 500);
    func('first', 800);
    func('second', 1300);
    func('third', 1500);
    func('move', 2500)
    func('display', 2500)

   };

  render() {
    
    const { show, border, move, first, second, third, display } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <div 
          className='btn-div btn'
          onClick={this.onButton}
        >
          <div className={classnames('border-div ', {
            'animation-border': border, 
            'hide': move, 
            'animation-border-back': display
            })}>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div> 
          <div className='i-div'>
            <i className={classnames("", { 'animation': move, 'hide' : first })} ></i>
            <i className={classnames("mt-2", { 'animation-two': move, 'hide' : second })}></i>
            <i className={classnames("mt-3", { 'animation-tree': move, 'hide' : third })}></i>
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