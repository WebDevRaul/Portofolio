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

  clickNext = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({ property: data.properties[newIndex] })
  };

  clickPrev = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({ property: data.properties[newIndex] })
  }
  render() {
    return (
      <div className='project-list'>
        <div className='container no-guters half-background'>
          <div className='row no-guters'>
            <div className='col d-flex'>
              <div className='project-list-div m-auto'>
                  <img  src={this.state.property.picture} width='200px' height='250px' alt="test" />
              </div>
            </div>
          </div>
          <div className='row no-gutters mt-2 mb-5'>
            <div className='col d-flex'>
              <div className='m-auto'>
              <button
                  className='btn btn-success'
                  onClick={this.clickPrev}
                >prev</button>
                  <span> </span>
                <button
                  className='btn btn-success'
                  onClick={this.clickNext}
                >next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
