import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

class DesktopView extends Component {

  onClick = () => {
    this.props.onClick();
  }
  render() {
    const { show } = this.props;
    return (
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
            activeClassName='active'
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
    )
  }
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(withRouter(DesktopView))