import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from '../layout/Navbar/Navbar';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Footer from '../layout/Footer';

// Redux
import { connect } from 'react-redux';
import { setMoreSkills, setSkills, setAboutMeP1, setAboutMeP2, setAboutMeP3, setAboutTitle } from '../redux/actions/about';

// Class helper
import scrollToElement from './common/ScrollToElement';

class Index extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.scrollAnimation);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAnimation);
  };

  scrollAnimation = () => {
    const { skills, more_skills, about_me_p1, about_me_p2, about_me_p3, title } = this.props.about;
    const scrollToTop = document.documentElement.scrollTop

    // Find element
    const titleElement = document.querySelector('#title').getBoundingClientRect();
    const aboutMeP1Element = document.querySelector('#about-me-p1').getBoundingClientRect();
    const aboutMeP2Element = document.querySelector('#about-me-p2').getBoundingClientRect();
    const aboutMeP3Element = document.querySelector('#about-me-p3').getBoundingClientRect();
    const skillsElement = document.querySelector('#skills').getBoundingClientRect();
    const moreSkillsElement = document.querySelector('#more-skills').getBoundingClientRect();

    // Create new class
    const titleClass = new scrollToElement(titleElement);
    const aboutMeP1Class = new scrollToElement(aboutMeP1Element);
    const aboutMeP2Class = new scrollToElement(aboutMeP2Element);
    const aboutMeP3Class = new scrollToElement(aboutMeP3Element);
    const skillClass = new scrollToElement(skillsElement);
    const moreskillClass = new scrollToElement(moreSkillsElement);

    // Resolve title animation
    if ((titleClass.element < titleClass.scroll) && (title === false)) {
      this.props.setAboutTitle(true);
    }
    // Resolve about-me-p1 animation
    if ((aboutMeP1Class.element < aboutMeP1Class.scroll) && (about_me_p1 === false)) {
      this.props.setAboutMeP1(true);
    }
    // Resolve about-me-p2 animation
    if ((aboutMeP2Class.element < aboutMeP2Class.scroll) && (about_me_p2 === false)) {
      this.props.setAboutMeP2(true);
    }
    // Resolve about-me-p3 animation
    if ((aboutMeP3Class.element < aboutMeP3Class.scroll) && (about_me_p3 === false)) {
      this.props.setAboutMeP3(true);
    }
    // Resolve skills animation
    if ((skillClass.element < skillClass.scroll) && (skills === false)) {
      this.props.setSkills(true);
    }
    // Resolve more-skills animation
    if ((moreskillClass.element < moreskillClass.scroll) && (more_skills === false)) {
      this.props.setMoreSkills(true);
    }

    // Reset animations
    if ((scrollToTop === 0) && (more_skills || skills || about_me_p1 || about_me_p2 || about_me_p3 || title)) {
      this.props.setMoreSkills(false);
      this.props.setSkills(false);
      this.props.setAboutMeP1(false);
      this.props.setAboutMeP2(false);
      this.props.setAboutMeP3(false);
      this.props.setAboutTitle(false);
    }
    
  };
  render() {
    return (
      <div className='index'>
        <section className='navbar-component'>
          <Navbar />
        </section>
        <section className='home-components'>
          <Home />
        </section>
        <section className='project-component'>
          <Projects />
        </section>
        <section className='about-component'>
          <About />
        </section>
        <section className='footer-component'>
          <Footer />
        </section>
      </div>
    );
  };
};

Index.propTypes = {
  about: PropTypes.object.isRequired,
  setAboutMeP1: PropTypes.func.isRequired,
  setAboutMeP2: PropTypes.func.isRequired,
  setAboutMeP3: PropTypes.func.isRequired,
  setSkills: PropTypes.func.isRequired,
  setMoreSkills: PropTypes.func.isRequired,
  setAboutTitle: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, { setMoreSkills, setSkills, setAboutMeP1, setAboutMeP2, setAboutMeP3, setAboutTitle })(Index);