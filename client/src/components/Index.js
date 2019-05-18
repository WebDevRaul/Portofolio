import React, { Component } from 'react';


// Components
import Navbar from '../layout/Navbar/Navbar';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Footer from '../layout/Footer';


// Class helper
import scrollToElement from './common/ScrollToElement';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollAnimation);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAnimation);
  };

  scrollAnimation = () => {
    const { title } = this.state;

    // Find element
    const skillElement = document.getElementById('title').getBoundingClientRect();

    // Create new class
    const skillClass = new scrollToElement(skillElement);

    // Rezolve animation
    if ((skillClass.element < skillClass.scroll) && (this.state.title === false)) {
      this.setState({ title: true })
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
    )
  }
}
