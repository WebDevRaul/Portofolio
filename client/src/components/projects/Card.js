import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const { index, picture } = property;
    return (
      <div id={`card-${index}`} className="project-card m-auto" >
        <img src={picture} alt='' width='150px' height='150px'/>
      </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;