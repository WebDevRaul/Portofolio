import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/landing/Landing';
import Navbar from './layout/Navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './layout/Footer';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Css
import './css/app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Router>
              <div className='app'>
                <div className='container-fluid pt-2'>
                  <Navbar />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/projects' component={Projects} />
                  <Footer />
                </div>
              </div>
            </Router>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
