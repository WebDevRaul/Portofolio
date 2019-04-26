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
  };

  componentDidMount() {
    // start interval
    this.interval = setInterval(() => this.timer(), 4000);
  }

  componentWillUnmount() {
    // clear interval
    clearInterval(this.interval);
  }


  timer = () => {
    const newIndex = this.state.property.index+1;
    if (newIndex !== this.state.properties.length) {
      setTimeout(() => this.setState({ property: data.properties[newIndex] }), 0);
    } else {
      this.setState({ property: data.properties[0] })
    }
  }

  onClickMe = id => {
    console.log(id)
  }

  onClickNext = () => {
    // onClick clear interval
    clearInterval(this.interval);
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    });
    // restart timer
    this.interval = setInterval(() => this.timer(), 4000);
  };

  onClickPrev = () => {
    // onClick clear interval
    clearInterval(this.interval);
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    });
    // restart timer
    this.interval = setInterval(() => this.timer(), 4000);
  };

  render() {
    const {properties, property} = this.state;
    return (
      <div className='project-list'>
        <div className='container pl-0 pr-0 half-background pt-3'>
          <div className='row no-gutters'>
            <div className='col'>
              <div className="project-list-div">
                <div className={`project-slider active-slide-${property.index}`} onClick={this.onClickFunc}>
                  <div className="project-slider-wrapper" style={{
                    'transform': `translateX(-${property.index*(100/properties.length)}%)`
                  }}>
                    {
                      properties.map(property => <Card key={property.index} property={property} onClickFunc={this.onClickMe} />)
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
                  className='btn btn-success m-3'
                  onClick={this.onClickPrev} 
                  disabled={property.index === 0}
                >Prev
                </button>
                <button 
                  className='btn btn-success m-3'
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
