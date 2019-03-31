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
      hideFirst: false,
      hideSecond: false,
      hideThird: false,
      returnAnimation: false,
      closeBtn: false,
      closeBtnBack: false,
    }
  }

  timer = (data, seconds) => {
    setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
  };

  onClick = () => {
    this.setState({ show: false });
  };

  onButton = () => {
    this.setState({ open: true, cycle: true, show: !this.state.show });
   };

  componentDidUpdate() {
    const { open, close, cycle, closeBtn, show, openBorder } = this.state;
    // Open
    if (open && cycle && !close) {
      // open & hide Border
      this.setState({ openBorder: true });
      this.timer('hideBorder', 450);

      // show animation & show close Btn & close Border
        // ~ show animation
      this.timer('hideFirst', 800);
      this.timer('hideSecond', 1300);
      this.timer('hideThird', 1500);
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
    // Close
    if (open && cycle && closeBtn && close) {
      // open & hide Border
      this.setState({ openBorder: true });
      this.timer('hideBorder', 450);
      // close Btn & show Animation & close Border
      this.timer('closeBtnBack', 450);
      this.timer('closeBtn', 800);
      // show animation
      this.timer('returnAnimation', 450);
      this.timer('hideFirst', 800);
      this.timer('hideSecond', 1300);
      this.timer('hideThird', 1500);
      // close Border
      this.timer('hideBorder', 2500);
      this.timer('closeBorder', 2500);
      this.timer('openBorder', 2500);
      // Reset
      this.setState({ cycle: false });
      setTimeout(() => { this.setState({ open: false, returnAnimation: false, closeBtnBack: false, closeBorder: false, close: false}) }, 3000);
    }
    // Reset if select a Link
    if (!show && !open && cycle && closeBtn && close) {
      // // open & hide Border
      this.setState({ openBorder: true });
      this.timer('hideBorder', 450);
      // close Btn & show Animation & close Border
      this.timer('closeBtnBack', 450);
      this.timer('closeBtn', 800);
      // show animation
      this.timer('returnAnimation', 450);
      this.timer('hideFirst', 800);
      this.timer('hideSecond', 1300);
      this.timer('hideThird', 1500);
      // close Border
      this.timer('hideBorder', 2500);
      this.timer('closeBorder', 2500);

      // Reset
      this.setState({ cycle: false });
      setTimeout(() => this.setState({ close: false, closeBorder: false, closeBtn: false, closeBtnBack: false, cycle: false, hideFirst: false, hideSecond: false, hideThird: false, returnAnimation: false, openBorder: false }), 3000);
    }

    // Reset
    if (!show && !cycle && !open && !close && openBorder) {
      this.setState({ openBorder: false })
    }
  };



  render() {
    
    const { show, openBorder, hideBorder, closeBorder, hideFirst, hideSecond, hideThird, closeBtn, closeBtnBack, returnAnimation } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <div 
          className='btn-div navbar-toggler p-0 border-0'
          onClick={this.onButton}
        >
        <MobileView 
          border={{ openBorder, hideBorder, closeBorder }}
          openBtn={{ openBorder, hideFirst, hideSecond, hideThird, returnAnimation }}
          closeBtn={{ closeBtn, closeBtnBack }}
          />
        </div>
        <DesktopView show={ show } onClick={this.onClick} />
      </nav>
    )
  }
};

export default Navbar;