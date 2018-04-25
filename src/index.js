import React from 'react';
import ReactDOM from 'react-dom';

import Amplify from 'aws-amplify';
import config from './config.json';

// sprinkle our styles on top
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import auth from './auth';
import { init } from './utils/buildFileUploadUrl';

import Main from 'components/Main';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

Amplify.configure({
  Auth: {
    ...config
  }
});

init(process.env.REACT_APP_FILE_HANDLER_URL, process.env.REACT_APP_FILE_HANDLER_BUCKET);

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
