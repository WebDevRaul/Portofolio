import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

// Components
import Logo from '../Logo';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

// Css
import '../../css/navbar.css';

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
      openButton: false,
      closeButton: false,
      hideButton: true,
      prevScrollpos: window.pageYOffset,
      visible: true
    }
  };
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  timer = (data, seconds) => {
    setTimeout(() => { this.setState({ [data]: !this.state[data] }) }, seconds);
  };

  onClick = () => {
    this.setState({ show: false });
  };

  onButton = () => {
    this.setState({ open: true, cycle: true, show: !this.state.show });
   };

   componentDidMount() {
    window.addEventListener("scroll", this.onShowHide);
  }

  componentDidUpdate(prevProp, prevState) {
    const { location } = this.props;
    const { open, close, cycle, openButton, show } = this.state;
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
      this.timer('hideButton', 1600);
      this.timer('openButton', 1600);
      // close Border
      this.timer('hideBorder', 2500);
      this.timer('closeBorder', 2500);
      this.timer('openBorder', 2500);
        // Reset
      this.timer('closeBorder', 2801);

      this.setState({ open: false, close: true });
    };
    // Close
    if (open && cycle && openButton && close) {
      // open & hide Border
      this.setState({ openBorder: true });
      this.timer('hideBorder', 450);
      // close Btn & show Animation & close Border
      this.timer('closeButton', 450);
      this.timer('openButton', 800);
      this.timer('hideButton', 1100);
      // show animation
      this.timer('returnAnimation', 850);
      this.timer('hideFirst', 1100);
      this.timer('hideSecond', 1500);
      this.timer('hideThird', 1700);
      // close Border
      this.timer('hideBorder', 2500);
      this.timer('closeBorder', 2500);
      this.timer('openBorder', 2500);
      // Reset
      this.setState({ cycle: false });
      setTimeout(() => { this.setState({ open: false, returnAnimation: false, closeButton: false, closeBorder: false, close: false}) }, 3000);
    }
    // Reset if select a Link
    if (!show && !open && cycle && openButton && close) {
      // // open & hide Border
      this.setState({ openBorder: true });
      this.timer('hideBorder', 450);
      // close Btn & show Animation & close Border
      this.timer('closeButton', 450);
      this.timer('openButton', 800);
      this.timer('hideButton', 1100);
      // show animation
      this.timer('returnAnimation', 850);
      this.timer('hideFirst', 1100);
      this.timer('hideSecond', 1500);
      this.timer('hideThird', 1700);
      // close Border
      this.timer('hideBorder', 2500);
      this.timer('closeBorder', 2500);
      this.timer('openBorder', 2500);

      // Reset
      this.setState({ cycle: false });
      setTimeout(() => this.setState({ close: false, closeBorder: false, openButton: false, closeButton: false, cycle: false, hideFirst: false, hideSecond: false, hideThird: false, returnAnimation: false, openBorder: false }), 3000);
    }
    if (prevProp.location !== location && !close) {
      this.setState({ close: false, closeBorder: false, openButton: false, closeButton: false, cycle: false, hideBorder: false, hideFirst: false, hideSecond: false, hideThird: false, open: false, openBorder: false, returnAnimation: false, show: false })
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onShowHide);
  }


  // Show & Hide navbar
  onShowHide = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };


  render() {
    const { show, openBorder, hideBorder, closeBorder, hideFirst, hideSecond, hideThird, openButton, closeButton, returnAnimation, hideButton, visible } = this.state;
    return (
      <nav className={classnames('navbar navbar-expand-lg navbar-light', {"navbar--hidden": !visible})}>
        <Logo />
        <div 
          className='btn-div navbar-toggler p-0 border-0'
          onClick={this.onButton}
        >
        <MobileView 
          border={{ openBorder, hideBorder, closeBorder }}
          openBtn={{ openBorder, hideFirst, hideSecond, hideThird, returnAnimation }}
          closeBtn={{ openButton, closeButton, hideButton }}
          />
        </div>
        <DesktopView show={ show } onClick={this.onClick} />
      </nav>
    )
  }
};

export default withRouter(Navbar);