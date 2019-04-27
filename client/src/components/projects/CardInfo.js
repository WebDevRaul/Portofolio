import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardInfo extends Component {
  render() {
    const { picture, title, summary, link, logo } = this.props.cardInfo;
    return (
      <div className='card-info mb-5 mt-5'>
        <div className='row no-gutters'>
          <div className='col d-flex'>
            <div class="card w-50 m-auto mb-3 p-2">
              <div className='card-body'>
                <h5 class="card-title">{title}</h5>
                <hr />
              </div>
              <img class="card-img-top" src={picture} alt="" height='220px' width='264px' />
              <div class="card-body">
                <p class="card-text">{summary}</p>
                <div className='d-flex'>
                  <p className='m-auto'><span class="badge badge-secondary">{logo}</span></p>
                </div>
                <p class="card-text"><small class="text-muted"><Link to='_blank'>{link}</Link></small></p>
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