import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const { id, picture } = property;
    return (
      <div id={`card-${id}`} className="project-card" >
        <img src={picture} alt=''/>
      </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;