import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import Products from 'components/Main/Products';

const productsQuery = graphql`
  query ProductsContainerQuery($count: Int!, $cursor: String) {
    ...Products
  }
`;

const variables = {
  count: 10,
  cursor: null
};

export default class ProductsContainer extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={productsQuery}
        variables={{
          count: 10,
          cursor: null
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <Products {...props} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
