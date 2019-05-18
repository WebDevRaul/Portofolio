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
import { setMoreSkills } from '../redux/actions/about';

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
    const { more_skills } = this.props.about;
    const scrollToTop = document.documentElement.scrollTop

    // Find element
    const skillElement = document.getElementById('more-skills').getBoundingClientRect();

    // Create new class
    const skillClass = new scrollToElement(skillElement);

    // Resolve more-skills animation
    if ((skillClass.element < skillClass.scroll) && (more_skills === false)) {
      this.props.setMoreSkills(true);
    }

    // Reset animations
    if ((scrollToTop === 0) && more_skills) {
      this.props.setMoreSkills(false);
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
  setMoreSkills: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, { setMoreSkills })(Index);