import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Redux
import { connect } from 'react-redux';

// Photo
import Photo from '../../assets/Photo.jpg'

class AboutMe extends Component {
  render() {
    const { about_me_p1, about_me_p2, about_me_p3} = this.props.about;
    return (
      <div className='about-me text-center'>
        <div className='row no-gutters'>
          <div className='col-md-5 m-auto d-flex'>
            <div className='about-me-photo-div m-auto d-flex'>
              <img src={Photo} className='about-me-photo m-auto' alt='Just me' />
            </div>
          </div>
          <div className='col col-md-7 mt-5'>
            <div className='about-me-bio m-auto p-3'>
              <p className={classnames('', {'slideInLeft': about_me_p1, 'opacity': !about_me_p1})} id='about-me-p1'>
                <span>H</span>ello! My name is Savin Raul-Calin, I`m 35y old currently living in UK.<br />
                At the end of 2017 I wrote the first <i>Hello World</i>, and since then I have been learning to code, using diffrent sources of information and dedicating every minute of my spare time for this passion.
              </p>
              <p className={classnames('animation-delay-300ms', {'slideInRight': about_me_p2, 'opacity': !about_me_p2})} id='about-me-p2'>As a person I`m communicative and friendly. Over the years, the jobs i performed always involved being in contact with people and being part of the team.</p>
              <p className={classnames('animation-delay-500ms', {'slideInLeft': about_me_p3, 'opacity': !about_me_p3})} id='about-me-p3'>I`m a dedicated self learner and problem solver. Programming has challenged me a lot, but hard work, curiosity and persistence helped me evolve.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

AboutMe.propTypes = {
  about: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, {})(AboutMe);