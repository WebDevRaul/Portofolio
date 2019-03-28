import React, { Component } from 'react';

// Components
import Logo from '../Logo';
import Border from './Border';
import OpenBtn from './OpenBtn';
import CloseBtn from './CloseBtn';
import NavbarView from './NavbarView';

// Css
import '../../css/test.css'

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
    // const timer = setTimeout(() => {this.setState({ show: !this.state.show })}, 1000);
    this.setState({ border: !this.state.border });

    // // Make btn lines to move and disapear
    const func = (data, seconds) => {
      setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
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
          className='btn-div'
          onClick={this.onButton}
        >
          <Border border={{ border, move, display }} />
          <OpenBtn  openBtn={{ move, first, second, third }} />
          <CloseBtn closeBtn={{ display }}/>
        </div>
        <NavbarView show={show} />
      </nav>
    )
  }
};

export default Navbar;