import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form>
        <div className="row no-gutters mb-3">
          <div className='col-sm col-md-6 m-auto'>
            <input type="email" className="form-control form-control-sm"  placeholder="name@example.com" />
          </div>
        </div>
        <div className="row no-gutters mb-3">
          <div className='col-sm col-md-6 m-auto'>
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </div>
      </form>
    );
  };
};