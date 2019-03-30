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
      cycle: false,
      open: false,
      close: false,
      openBorder: false,
      hideBorder: false,
      closeBorder: false,
      first: false,
      second: false,
      third: false,
      closeBtn: false,
      closeBtnBack: false,
      firstBack: false,
    }
  }

  timer = (data, seconds) => {
    setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
  };

  onButton = () => {
    this.setState({ open: true, cycle: true });
   };

  componentDidUpdate() {
    const { open, close, cycle, closeBtn } = this.state;
    // Open
    if (open && cycle && !close) {
      // open & hide Border
      this.setState({ openBorder: true });
      this.timer('hideBorder', 450);

      // show animation & show close Btn & close Border
        // ~ show animation
      this.timer('first', 800);
      this.timer('second', 1300);
      this.timer('third', 1500);
        // show close Btn
      this.timer('closeBtn', 1600);
      // close Border
      this.timer('hideBorder', 2500);
      this.timer('closeBorder', 2500);
      this.timer('openBorder', 2500);
        // Reset
      this.timer('closeBorder', 2801);

      this.setState({ open: false, close: true });
    };
    if (open && cycle && closeBtn && close ) {
      // open & hide Border
      this.setState({ openBorder: true });
      this.timer('hideBorder', 450);
      // close Btn & show Animation & close Border
      this.timer('closeBtnBack', 450);
      this.timer('closeBtn', 800);
      // show animation
      this.timer('firstBack', 450);
      this.timer('first', 800);
      this.timer('second', 1300);
      this.timer('third', 1500);
      // close Border
      this.timer('hideBorder', 2500);
      this.timer('closeBorder', 2500);
      this.timer('openBorder', 2500);
      // Reset
      this.setState({ cycle: false });
      setTimeout(() => { this.setState({ open: false, firstBack: false, closeBtnBack: false, closeBorder: false, close: false }) }, 3000);
    }
  }



  render() {
    
    const { show, open, cycle, close, openBorder, hideBorder, closeBorder, first, second, third, closeBtn, closeBtnBack, firstBack } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <div 
          className='btn-div'
          onClick={this.onButton}
        >
        <MobileView 
          border={{ openBorder, hideBorder, closeBorder }}
          openBtn={{ openBorder, first, second, third, firstBack }}
          closeBtn={{ closeBtn, closeBtnBack }}
          />
        </div>
        <DesktopView show={ show } />
      </nav>
    )
  }
};

export default Navbar;