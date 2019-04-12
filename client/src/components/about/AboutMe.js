import React, { Component } from 'react';
import classnames from 'classnames';

// Photo
import Photo from '../../assets/Photo.jpg'

class AboutMe extends Component {
  first = element => {
    if(element) return this.props.first(element.getBoundingClientRect(element));
  }
  second = element => {
    if(element) return this.props.second(element.getBoundingClientRect(element));
  }
  third = element => {
    if(element) return this.props.third(element.getBoundingClientRect(element));
  }
  render() {
    const { animation } = this.props;
    return (
      <div className='about-me text-center'>
        <div className='row no-gutters'>
          <div className='col-md-5 m-auto d-flex'>
            <div className='about-me-photo-div m-auto d-flex'>
              <img src={Photo} className='about-me-photo m-auto' alt='Just me' />
            </div>
          </div>
          <div className='col col-md-7 mt-5'>
            <div className='about-me-bio p-3'>
              <p 
                ref={this.first} 
                className={classnames('', {'animation-left': animation})}
              >
                <span className={classnames('about-me-first-letter', {'animation-left': animation})}>H</span>ello! My name is Savin Raul-Calin, I`m 35y old currently living in UK.<br />
                At the end of 2017 I wrote the first <i>Hello World</i>, and since then I have been learning to code, using diffrent sources of information and dedicating every minute of my spare time for this passion.
              </p>
              <p 
                ref={this.second}
                className={classnames('', {'animation-right': animation})} 
              >As a person I`m communicative and friendly. Over the years, the jobs i performed always involved being in contact with people and being part of the team.</p>
              <p
                ref={this.third} 
                className={classnames('', {'animation-left': animation})} 
              >I`m a dedicated self learner and problem solver. Programming has challenged me a lot, but hard work, curiosity and persistence helped me evolve.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default AboutMe;