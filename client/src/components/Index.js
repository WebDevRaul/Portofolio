import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import Navbar from '../layout/Navbar/Navbar';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Footer from '../layout/Footer';

// Redux
import { connect } from 'react-redux';
import { setMoreSkills, setSkills, setAboutMeP1, setAboutMeP2, setAboutMeP3, setAboutTitle, setAboutTitleHideDiv, setAbout } from '../redux/actions/about';
import { setProjectTitle, setProjectBinary, setProject } from '../redux/actions/project';

// Class helper
import scrollToElement from './common/ScrollToElement';

class Index extends Component {
  state = {
    scroll_to_top: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollAnimation);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAnimation);
  };

  scrollAnimation = () => {
    const { skills, more_skills, about_me_p1, about_me_p2, about_me_p3, title } = this.props.about;
    const { binary } = this.props.project;
    const project_title = this.props.project.title;
    const { scroll_to_top } = this.state;
    const scrollToTop = document.documentElement.scrollTop

    // Find element {About}
    const aboutTitleElement = document.querySelector('#title').getBoundingClientRect();
    const aboutMeP1Element = document.querySelector('#about-me-p1').getBoundingClientRect();
    const aboutMeP2Element = document.querySelector('#about-me-p2').getBoundingClientRect();
    const aboutMeP3Element = document.querySelector('#about-me-p3').getBoundingClientRect();
    const aboutSkillsElement = document.querySelector('#skills').getBoundingClientRect();
    const AboutMoreSkillsElement = document.querySelector('#more-skills').getBoundingClientRect();
    // Find element {Project}
    const projectTitleElement = document.querySelector('#project-title').getBoundingClientRect();
    const projectBinaryElement = document.querySelector('#project-binary').getBoundingClientRect();

    // Create new class {About}
    const aboutTitleClass = new scrollToElement(aboutTitleElement);
    const aboutMeP1Class = new scrollToElement(aboutMeP1Element);
    const aboutMeP2Class = new scrollToElement(aboutMeP2Element);
    const aboutMeP3Class = new scrollToElement(aboutMeP3Element);
    const aboutSkillClass = new scrollToElement(aboutSkillsElement);
    const aboutMoreSkillClass = new scrollToElement(AboutMoreSkillsElement);
    // Create new class {Project}
    const projectTitleClass = new scrollToElement(projectTitleElement);
    const projectBinaryClass = new scrollToElement(projectBinaryElement);

    // Resolve title animation {About}
    if ((aboutTitleClass.element < aboutTitleClass.scroll) && (title === false)) {
      this.props.setAboutTitle(true);
      // This is to hide the div on subtitle {About}
      setTimeout(() => this.props.setAboutTitleHideDiv(true), 620);
    }
    // Resolve about-me-p1 animation {About}
    if ((aboutMeP1Class.element < aboutMeP1Class.scroll) && (about_me_p1 === false)) {
      this.props.setAboutMeP1(true);
    }
    // Resolve about-me-p2 animation {About}
    if ((aboutMeP2Class.element < aboutMeP2Class.scroll) && (about_me_p2 === false)) {
      this.props.setAboutMeP2(true);
    }
    // Resolve about-me-p3 animation {About}
    if ((aboutMeP3Class.element < aboutMeP3Class.scroll) && (about_me_p3 === false)) {
      this.props.setAboutMeP3(true);
    }
    // Resolve skills animation {About}
    if ((aboutSkillClass.element < aboutSkillClass.scroll) && (skills === false)) {
      this.props.setSkills(true);
    }
    // Resolve more-skills animation {About}
    if ((aboutMoreSkillClass.element < aboutMoreSkillClass.scroll) && (more_skills === false)) {
      this.props.setMoreSkills(true);
    }
    // Resolve project-title animation {Project}
    if ((projectTitleClass.element < projectTitleClass.scroll) && (project_title === false)) {
      this.props.setProjectTitle(true);
    }
    // Resolve project-binary animation {Project}
    if ((projectBinaryClass.element < projectBinaryClass.scroll) && (binary === false)) {
      this.props.setProjectBinary(true);
    }

    // Reset animations
    if ((scrollToTop === 0) && (more_skills || skills || about_me_p1 || about_me_p2 || about_me_p3 || title || project_title || binary || scroll_to_top)) {
      this.props.setAbout();
      this.props.setProject();
      this.setState({ scroll_to_top: false });
    }

    // Scroll_to_top btn
    if ((scrollToTop !== 0) && !scroll_to_top) {
      this.setState({ scroll_to_top: true });
    }
    
  };

  onClick = () => {
    document.documentElement.scrollTop = 0;
  }
  render() {
    const { scroll_to_top } = this.state;
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
        <div className={classnames('scroll-to-top', { 'hide': !scroll_to_top })} onClick={this.onClick}>
          <i className="far fa-arrow-alt-circle-up"></i>
        </div>
        <section className='footer-component'>
          <Footer />
        </section>
      </div>
    );
  };
};

Index.propTypes = {
  about: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  setAboutTitle: PropTypes.func.isRequired,
  setAboutMeP1: PropTypes.func.isRequired,
  setAboutMeP2: PropTypes.func.isRequired,
  setAboutMeP3: PropTypes.func.isRequired,
  setSkills: PropTypes.func.isRequired,
  setMoreSkills: PropTypes.func.isRequired,
  setAboutTitleHideDiv: PropTypes.func.isRequired,
  setAbout: PropTypes.func.isRequired,
  setProjectTitle: PropTypes.func.isRequired,
  setProjectBinary: PropTypes.func.isRequired,
  setProject: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  about: state.about,
  project: state.project
});

export default connect(mapStateToProps, { setMoreSkills, setSkills, setAboutMeP1, setAboutMeP2, setAboutMeP3, setAboutTitle, setAboutTitleHideDiv, setAbout, setProjectTitle, setProjectBinary, setProject })(Index);