import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

class DesktopView extends Component {

  onClick = id => () => {
    this.props.onClick();
    const el = document.getElementById(id);
    el.scrollIntoView();
  }
  render() {
    const { show } = this.props;
    return (
      <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
        <ul className='navbar-nav ml-auto mr-5'>
          <li className="nav-item mr-3">
            <span 
              className='nav-link' 
              onClick={this.onClick('home')}
            >Home</span>
          </li>
          <li className="nav-item mr-3">
            <span className='nav-link' onClick={this.onClick('projects')}>Projects</span>
          </li>
          <li className="nav-item mr-3">
            <span className='nav-link' onClick={this.onClick('about')}>About</span>
          </li>
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(withRouter(DesktopView))