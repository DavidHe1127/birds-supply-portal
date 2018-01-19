import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from 'containers/Main/Products';
import NewProduct from 'containers/Main/Products/NewProduct';
import EditProduct from 'containers/Main/Products/EditProduct';

export default () => (
  <Switch>
    <Route exact path="/products" component={Products} />
    <Route path="/products/new" component={NewProduct} />
    <Route path="/products/:productId/edit" component={EditProduct} />
  </Switch>
);
