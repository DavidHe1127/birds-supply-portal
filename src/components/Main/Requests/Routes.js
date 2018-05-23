import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Requests from 'containers/Main/Requests';
import NewRequestForm from 'containers/Main/Requests/NewRequest';

export default () => (
  <Switch>
    <Route exact path='/requests' component={Requests} />
    <Route path='/requests/new' component={NewRequestForm} />
  </Switch>
);
