import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from 'components/Main';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/products" />} />
      <Route path="/products" component={Main.Products} />
      <Route path="/events" component={Main.Events} />
      <Route path="/requests" component={Main.Requests} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();