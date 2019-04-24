import React from 'react';


const ProjectPhoto = ({ property }) => {
  const { picture } = property;

  return (
    <div className='project-photo'>
      <img  src={picture} width='200px' height='250px' alt="test" />
    </div>
  )
};


export default ProjectPhoto;