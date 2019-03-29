import React, { Component } from 'react';

// Components
import Logo from '../Logo';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

// Css
import '../../css/test.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      openBorder: false,
      hideBorder: false,
      first: false,
      second: false,
      third: false,
      closeBorder: false,
    }
  }

  onButton = () => {
    // const timer = setTimeout(() => {this.setState({ show: !this.state.show })}, 1000);
    this.setState({ openBorder: !this.state.openBorder });

    // // Make btn lines to move and disapear
    const func = (data, seconds) => {
      setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
    };
    func('hideBorder', 500);
    func('first', 800);
    func('second', 1300);
    func('third', 1500);
    func('hideBorder', 2500);
    func('closeBorder', 2500);
    func('openBorder', 3000);
    func('closeBorder', 3000);
    
   };

  render() {
    const { show, openBorder, hideBorder, first, second, third, closeBorder } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <div 
          className='btn-div'
          onClick={this.onButton}
        >
        <MobileView 
          border={{ openBorder, hideBorder, closeBorder }}
          openBtn={{ first, second, third }}
          closeBtn={{  }}
          />
        </div>
        <DesktopView show={ show } />
      </nav>
    )
  }
};

export default Navbar;