import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from 'components/Products';
import Events from 'components/Events';
import Requests from 'components/Requests';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/products" component={Products} />
      <Route path="/events" component={Events} />
      <Route path="/requests" component={Requests} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();