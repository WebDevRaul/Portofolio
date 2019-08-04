import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Index from './components/Index';
import NotFound from './components/common/NotFound';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Css
import './css/app.css';
import './css/animation.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
