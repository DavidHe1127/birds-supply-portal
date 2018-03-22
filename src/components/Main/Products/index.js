import React, { Component } from 'react';
import { createPaginationContainer, graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import Product from 'components/Main/Products/Product';

class Products extends Component {
  render () {
    const rows = this.props.viewer.products.edges.map(e => (
      <Product
        {...e.node}
        viewerId={this.props.id}
        onDelete={this.props.onDelete}
        onEdit={this.props.onEdit}
        key={e.node.id}
      />
    ));

    return <Card.Group itemsPerRow={4}>{rows}</Card.Group>;
  }
}

export default createPaginationContainer(
  withRouter(Products),
  graphql`
    fragment Products_viewer on User {
      id
      products(first: 100) @connection(key: "Products_products", filters: []) {
        edges {
          cursor
          node {
            id
            price
            qty
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
      query ProductsQuery {
        viewer {
          ...Products_viewer
        }
      }
    `,
    getFragmentVariables (prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables (props, { count }, fragmentVariables) {
      return {
        count
      };
    }
  }
);
