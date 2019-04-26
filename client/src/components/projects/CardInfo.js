import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardInfo extends Component {
  render() {
    const { picture, title, summary, link, logo } = this.props.cardInfo;
    return (
      <div className='card-info mb-5 mt-5'>
        <div className='row no-gutters'>
          <div className='col-sm-12 d-flex col-md-6'>
            <div className='m-auto'>
              <img src={picture} width='220px' height='264px'/>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className=''>
              <h5>{title}</h5>
              <p>{summary}</p>
              <Link to='/'>{link}</Link>
              <p>{logo}</p>
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