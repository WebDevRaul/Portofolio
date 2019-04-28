import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Animation
import WOW from "wow.js";

class CardInfo extends Component {
  constructor() {
    super();
    this.state = {
      animateCard: false
    }
  }

  componentDidMount() {
    const wow = new WOW();
    wow.init();
  };

  componentDidUpdate(prevProps, prevState) {
    const { picture } = this.props.cardInfo;
    // Start animation
    if (picture !== prevProps.cardInfo.picture) {
      this.setState({ animateCard: true });
    // Reset animation
      setTimeout(() => this.setState({ animateCard: false }), 1500)
    }
  }

  
  render() {
    const { picture, title, summary, link, linkName, logo } = this.props.cardInfo;
    const { animateCard } = this.state;
    return (
      <div className='card-info mb-5 mt-5'>
        <div className='row no-gutters'>
          <div className='d-flex col-10 offset-1 col-sm-10 offset-sm-1 col-md-6 offset-md-3'>
            <div className={classnames('card m-auto mb-3 p-2', {'bounceInRightCard': animateCard})}>
              <div className='card-body pb-0'>
                <h5 className="card-title">{title}</h5>
                <hr />
              </div>
              <img className="card-img-top" src={picture} alt="" />
              <hr />
              <div className="card-body">
                <p className="card-text">{summary}</p>
                <div className='d-flex'>
                  <p className='m-auto'><span className="badge badge-secondary">{logo}</span></p>
                </div>
                <p className="card-text"><small className="text-muted"><a href={link} target='_blank' rel="noopener noreferrer">{linkName}</a></small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

CardInfo.propTypes = {
  cardInfo: PropTypes.object.isRequired,
};

export default CardInfo;