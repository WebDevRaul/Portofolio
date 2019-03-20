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
      first: false,
      second: false,
      third: false,
      displayFirst: false,
      displaySecond: false,
      displayThird: false,
    }
  }

  onClick = () => {
    // const timer = setTimeout(() => {this.setState({ show: !this.state.show })}, 2000);
    this.setState({ first: !this.state.first });

    // Make btn lines to move and disapear
    const func = (data, seconds) => {
      const timer = setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
    };
    func('second', 300);
    func('third', 600);
    func('displayFirst', 699);
    func('displaySecond',1000);
    func('displayThird', 1300);

   };

  render() {
    
    const { show, first, second, third, displayFirst, displaySecond, displayThird } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <div className=''>
          <button
            className="new-icon navbar-toggler"
            type="button"
            onClick={this.onClick}  
          >
            <i className={classnames("", { 'animation': first, 'display': displayFirst })} ></i>
            <i className={classnames("", { 'animation': second, 'display': displaySecond })}></i>
            <i className={classnames("", { 'animation': third, 'display': displayThird })}></i>
          </button>
          <div className='div-square'>
            <div className='m-0 line'></div>
            <div className='m-0 line'></div>
            <div className='m-0 line'></div>
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