import React, { Component } from 'react';

// Components
import Title from './Title';
import ProjectImageSlider from './ProjectImageSlider';
import ProjectCard from './ProjectCard';

// CSS
import '../../css/project.css';


export default class Projects extends Component {
  
  onClickSlider = id => {
    const el = document.getElementById(`cardItem-${id}`);
    el.scrollIntoView({block: 'center', inline: 'center'});
    el.classList.add('active-card');
    setTimeout(() => el.classList.remove('active-card'), 5000);
  };
  
  render() {
    return (
      <div className='projects' id='projects'>
        <div className='container-fluid p-0'>
          <div className='row no-gutters'>
            <div className='col'>
              <Title />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <ProjectImageSlider onClickSlider={this.onClickSlider} />
            </div>
          </div>
          <div className='row no-gutters'>
            <div className='col'>
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    );
  };
};