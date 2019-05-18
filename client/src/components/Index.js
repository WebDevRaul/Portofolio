import React, { Component } from 'react';


// Components
import Navbar from '../layout/Navbar/Navbar';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Footer from '../layout/Footer';

export default class Index extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.scrollAnimation);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollAnimation);
  };


  scrollAnimation() {
    const el = document.getElementById('skills').getBoundingClientRect();
    // console.log(el + document.documentElement.scrollTop, 'el')
    // console.log(window.innerHeight, 'innerHeight');
    // console.log(document.documentElement.scrollTop + window.innerHeight ,'document.documentElement.scrollTop')
    const element = el.top + document.documentElement.scrollTop + (el.height / 2);
    const elementBot = el.top + document.documentElement.scrollTop + (el.height - (el.height / 4));
    const scroll = document.documentElement.scrollTop + window.innerHeight;
    if ((element < scroll) && (elementBot > scroll)) {
      console.log('test')
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
