import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

import Index from './components/Index';
import NotFound from './components/common/NotFound';

import './css/app.css';
import './css/animation.css';


const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;