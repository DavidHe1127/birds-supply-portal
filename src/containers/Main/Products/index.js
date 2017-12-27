import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';
import { Route, Switch } from 'react-router-dom';

import ProductsContainer from 'containers/Main/Products/Products';
import NewProduct from 'components/Main/Products/NewProduct';

export default class ProductsIndexContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/products" component={ProductsContainer} />
        <Route path="/products/new" component={NewProduct} />
      </Switch>
    );
  }
}