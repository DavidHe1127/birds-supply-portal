import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import Products from 'components/Main/Products';

const productsQuery = graphql`
  query ProductsContainerQuery($count: Int!) {
    ...Products_products
  }
`;

const variables = {
  count: 100
};

export default class ProductsContainer extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={productsQuery}
        variables={variables}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <Products products={props} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
