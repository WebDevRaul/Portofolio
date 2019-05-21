import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clasnames from 'classnames'; 

class CardItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      titleAnimation: false,
      summaryAnimation: false,
      skillsAnimation: false,
      linkAnimation: false
    };
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
        <div className={clasnames('cardItemDiv', {'hide': !hover})} >
          <div className='cardItemCenter'>
            <div className='row no-gutters'>
              <div className='col'>
                <div className='cardItemTitleBorder text-center'>
                  <h5 className={clasnames('bounceInRightCard', {'hide': !titleAnimation })}><span>{title}</span></h5>
                </div>
              </div>
            </div>
            <div className='row no-gutters summary text-center'>
              <div className='col'>
                <div className=''>
                  <p className={clasnames(' mb-0 bounceInRightCard', {'hide': !summaryAnimation })}>{summary}</p>
                </div>
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col'>
                <div className={clasnames('card-item-skill  bounceInRightCard', {'hide': !skillsAnimation})}>
                  <div className='d-flex'>
                    <span className='m-auto'>{skills}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className={clasnames('card-item-link mr-3 ', {'hide': !linkAnimation})}><a href={link} target='_blank' rel="noopener noreferrer">{linkName}</a></p>
        </div>
      </div>
    );
  };
};

CardItem.propTypes = {
  data: PropTypes.object.isRequired,
}


export default CardItem;