import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

// sprinkle our styles on top
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from 'components/Main';
import Login from 'components/Login';
import Signup from 'components/Signup';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/products" />} />
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
