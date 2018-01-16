import React, { Component } from 'react';
import { createPaginationContainer, graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import Header from './Header';
import ProductsContainer from 'containers/Main/Products/Products';

class Products extends Component {

  addProduct = e => this.props.history.push('/products/new')

  render() {
    return (
      <Container>
        <Header addProduct={this.addProduct} />
        <Container>
          <ProductsContainer {...{ products: this.props.products.products }} />
        </Container>
      </Container>
    );
  }
}

export default createPaginationContainer(
  withRouter(Products),
  graphql`
    fragment Products_products on Query {
      products(first: $count)
        @connection(key: "Products_products", filters: []) {
        edges {
          cursor
          node {
            id
            price
            sku
            parrot {
              ...Product_parrot
            }
            supplier {
              ...Product_supplier
            }
          }
        }
      }
    }
  `,
  {
    query: graphql`
      query ProductsQuery($count: Int!) {
        ...Products_products
      }
    `,
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count }, fragmentVariables) {
      return {
        count
      };
    }
  }
);
