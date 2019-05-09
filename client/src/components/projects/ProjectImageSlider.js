import React, { Component } from 'react';

// Components
import Card from './Card';

// Images
import data from '../../assets/projects/data';

class ProjectImageSlider extends Component {
  constructor(){
    super();
    this.state = {
      data: data,
      card: data[0],
      cardClick: data[0]
    }
  };
  
  componentDidMount() {
    // start interval
    this.interval = setInterval(() => this.timer(), 5000);
  };

  componentWillUnmount() {
    // clear interval
    clearInterval(this.interval);
  };


  timer = () => {
    const newIndex = this.state.card.index+1;
    if (newIndex !== this.state.data.length) {
      setTimeout(() => this.setState({ card: data[newIndex] }), 0);
    } else {
      this.setState({ card: data[0] })
    }
  };


  onClickNext = () => {
    // onClick clear interval
    clearInterval(this.interval);
    // manual change
    const newIndex = this.state.card.index+1;
    this.setState({ card: data[newIndex] });
    // restart timer
    this.interval = setInterval(() => this.timer(), 5000);
  };
  
  onClickPrev = () => {
    // onClick clear interval
    clearInterval(this.interval);
    // manual change
    const newIndex = this.state.card.index-1;
    this.setState({ card: data[newIndex] });
    // restart timer
    this.interval = setInterval(() => this.timer(), 5000);
  };

  onClickProp = id => {
    const newIndex = (this.state.card.index * 0 ) + Number(id);
    this.setState({ cardClick: data[newIndex] });
    console.log(id, 'prop')
  }
  
  onClickCurrentCard = () => {
    const { card } = this.state;
    console.log(card.id, 'curentCard')
  }

  render() {
    const { data, card } = this.state;
    const style = {'transform': `translateX(-${card.index*(100/data.length)}%)`, 'transition': '0.5s'};
    return (
      <div className='container pl-0 pr-0 mb-3'>
        <div className='row no-gutters'>
          <div className='col'>
            <div className='project-image-slider-wrapper'>
              <div className='left'></div>
              <div className='right'></div>
              <div className='arrow-left'>
                <button className='btn'  onClick={this.onClickPrev} disabled={card.index === 0} >
                  <i className="fas fa-chevron-left"></i>
                </button>
              </div>
              <div className='arrow-right'>
                <button className='btn' onClick={this.onClickNext} disabled={card.index === data.length-1}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className='project-image-slide'>
                <div className='project-image-slide-card-border' onClick={this.onClickCurrentCard}></div>
                <div className="project-image-slide-div">
                  <div className="project-slide-wrapper" style={style}>
                      {
                        data.map(card => <Card key={card.index} card={card} onClickProp={this.onClickProp} />)
                      }
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default ProjectImageSlider;