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
          <div className='col d-flex'>
            <div className={classnames('card m-auto w-50 mb-3 p-2', {'bounceInRightCard': animateCard})}>
              <div className='card-body'>
                <h5 className="card-title">{title}</h5>
                <hr />
              </div>
              <img className="card-img-top" src={picture} alt="" height='220px' width='264px' />
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