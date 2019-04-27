import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// Animation
import WOW from "wow.js";

class CardInfo extends Component {
  constructor() {
    super();
    this.state = {
      animate: false
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
      this.setState({ animate: true });
    // Reset animation
      setTimeout(() => this.setState({ animate: false }), 1500)
    }
  }

  
  render() {
    const { picture, title, summary, link, logo } = this.props.cardInfo;
    const { animate } = this.state;
    return (
      <div className='card-info mb-5 mt-5'>
        <div className='row no-gutters'>
          <div className='col d-flex'>
            <div className={classnames('card m-auto w-50 mb-3 p-2', {'bounceInRight': animate})}>
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
                <p className="card-text"><small className="text-muted"><Link to='_blank'>{link}</Link></small></p>
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