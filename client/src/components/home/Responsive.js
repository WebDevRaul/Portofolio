import React, { Component } from 'react';


export default class Responsive extends Component {
  render() {
    return (
      <div className='responsive'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col'>
              <h5>Responsive Websites ...</h5>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <div className='responsive-img-div d-flex'>
                <div className='m-auto'>
                  img of pc,laptop & smartphone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
