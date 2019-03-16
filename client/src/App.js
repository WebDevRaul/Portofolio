import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/landing/Landing';
import Home from './components/home/Home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Router>
              <div className='container-fluid'>
                <Navbar />
                <Route exact path='/home' component={Home} />
                <Footer />
              </div>
            </Router>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
