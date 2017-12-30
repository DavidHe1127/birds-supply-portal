import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from 'containers/Main/Products';
import NewProduct from 'containers/Main/Products/NewProduct';

export default () => (
  <Switch>
    <Route exact path="/products" component={Products} />
    <Route path="/products/new" component={NewProduct} />
  </Switch>
);
