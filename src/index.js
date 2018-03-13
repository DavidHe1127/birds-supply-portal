import React from 'react';
import ReactDOM from 'react-dom';

import Amplify from 'aws-amplify';
import config from './config.json';
import 'semantic-ui-css/semantic.min.css';

// sprinkle our styles on top
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import auth from './auth';

import Main from 'components/Main';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

Amplify.configure({
  Auth: {
    ...config
  }
});

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      auth.hasAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location}
          }}
        />
      )
    }
  />
);

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/products" component={Main.Products} />
      <PrivateRoute path="/events" component={Main.Events} />
      <PrivateRoute path="/requests" component={Main.Requests} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
