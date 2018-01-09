import React, { Component } from 'react';
import { createPaginationContainer, graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import Header from './Header';
import ProductsContainer from 'containers/Main/Products/Products';

class Products extends Component {
  addProduct = e => this.props.history.push('/products/new');

  render() {
    const products = this.props.products.products.edges.map(x => ({
      id: x.node.id,
      price: x.node.price,
      name: x.node.parrot.name,
      supplier: x.node.supplier.name
    }));

    return (
      <Container>
        <Header addProduct={this.addProduct} />
        <Container>
          <ProductsContainer {...{ products }} />
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
            parrot {
              id
              name
              description
            }
            supplier {
              name
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