import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className='about-me text-center'>
        <div className='row'>
          <div className='col-md-5'>
            photo here
          </div>
          <div className='col col-md-7'>
            <div className='about-me-bio'>
              <p>
                <span className='about-me-first-letter'>H</span>ello! My name is Savin Raul-Calin, I`m 35y old currently living in UK.<br />
                At the end of 2017 I wrote the first <i>Hello World</i>, and since then I have been learning to code, using diffrent sources of information and dedicating every minute of my spare time for this passion.
              </p>
              <p>As a person I`m communicative and friendly. Over the years, the jobs i performed always involved being in contact with people and being part of the team.</p>
              <p>I`m a dedicated self learner and problem solver. Programming has challenged me a lot, but hard work, curiosity and persistence helped me evolve.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default AboutMe;