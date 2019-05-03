import React, { Component } from 'react';
import clasnames from 'classnames'; 

// Animation
import WOW from "wow.js";

class CardItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      titleAnimation: false,
      summaryAnimation: false,
      skillsAnimation: false,
      linkAnimation: false
    }
  }

  componentDidMount() {
    const wow = new WOW();
    wow.init();
  };
  

  onMouseEnter = () => {
    this.setState({ hover: true });
    setTimeout(() => this.setState({ titleAnimation: true }), 200);
    setTimeout(() => this.setState({ summaryAnimation: true }), 300);
    setTimeout(() => this.setState({ skillsAnimation: true }), 400);
    setTimeout(() => this.setState({ linkAnimation: true }), 500);
  }
  
  onMouseLeave = () => {
    this.setState({ hover: false, titleAnimation: false, summaryAnimation: false, skillsAnimation: false, linkAnimation: false })
  }


  render() {
    const { picture, title, summary, skills, link, linkName, id } = this.props.data;
    const { hover, titleAnimation, summaryAnimation, skillsAnimation, linkAnimation } = this.state;

    return (
      <div 
        className='cardItem' 
        id={`cardItem-${id}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        >
        <img src={picture} alt=''/>
        <div className={clasnames('hide cardItemInfo', {'show': hover})}>
            <div className='cardInfoDiv'>
              <h5 className={clasnames('cardInfoTitle hide pb-1 bounceInRightCard', {'show': titleAnimation })}>{title}</h5>
              <p className={clasnames('bounceInRightCard hide', {'show': summaryAnimation})}>{summary}</p>
              <p className={clasnames('bounceInRightCard hide', {'show': skillsAnimation})}>{skills}</p>
              <p className={clasnames('bounceInRightCard hide', {'show': linkAnimation})}><a href={link} target='_blank' rel="noopener noreferrer">{linkName}</a></p>
            </div>
        </div>
      </div>
    )
  }
}


export default CardItem;