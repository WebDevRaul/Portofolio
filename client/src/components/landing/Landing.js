import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Landing extends Component {

  componentDidMount() {
    setInterval(() => this.props.history.push('/home'), 5000);
  }
  render() {
    return (
      <div>
        Landing
      </div>
    )
  }
}


export default withRouter(Landing)