import React from 'react';
import ReactDOM from 'react-dom';

import Amplify from 'aws-amplify';
import config from '../config.json';

Amplify.configure({
  Auth: {
    ...config
  }
});

import 'semantic-ui-css/semantic.min.css';

// sprinkle our styles on top
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from 'components/Main';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/products" component={Main.Products} />
      <Route path="/events" component={Main.Events} />
      <Route path="/requests" component={Main.Requests} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
