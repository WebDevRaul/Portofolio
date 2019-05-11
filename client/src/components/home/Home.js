import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

// Components
import Responsive from './Responsive';

class Home extends Component {

  onClick = () => {
    window.location.href = '/';
  }
  render() {
    return (
      <div>
        <div className='row no-gutters'>
            <div className='col'>
            <button className='btn btn-primary' onClick={this.onClick} >back</button>
              <Responsive />
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Home);