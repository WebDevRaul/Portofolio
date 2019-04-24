import React, { Component } from 'react';

// Images
import data from '../../assets/projects/data'

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }
  render() {
    return (
      <div className='project-list'>
        <div className='container no-guters half-background'>
          <div className='row no-guters'>
            <div className='col d-flex'>
              <div className='project-list-div m-auto'>
                  <img  src={this.state.property.picture} width='200px' height='250px'/>
              </div>
            </div>
          </div>
          <div className='row no-gutters mt-2 mb-5'>
            <div className='col d-flex'>
              <div className='m-auto'>
                <button
                  className='btn btn-success'
                >next</button>
                  <span> </span>
                <button
                  className='btn btn-success'
                >prev</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
