import React, { Component } from 'react';

// Components
import Card from './Card';

// Images
import data from '../../assets/projects/data'

// Css
import '../../css/project.css';

class ProjectList extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  onClickNext = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  onClickPrev = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
    return (
      <div className='project-list'>
        <div className='container pl-0 pr-0 half-background pt-3'>
          <div className='row no-gutters'>
            <div className='col'>
              <div className="project-list-div">
                <div className={`project-slider active-slide-${property.index}`}>
                  <div className="project-slider-wrapper" style={{
                    'transform': `translateX(-${property.index*(100/properties.length)}%)`
                  }}>
                    {
                      properties.map(property => <Card key={property.index} property={property} />)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col d-flex'>
              <div className='m-auto'>
                <button 
                  className='btn btn-success'
                  onClick={this.onClickPrev} 
                  disabled={property.index === 0}
                >Prev
                </button>
                <button 
                  className='btn btn-success'
                  onClick={this.onClickNext} 
                  disabled={property.index === data.properties.length-1}
                >Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectList;
