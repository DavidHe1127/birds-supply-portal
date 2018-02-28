import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import Products from 'components/Main/Products';

const productsQuery = graphql`
  query ProductsContainerQuery {
    viewer {
      ...Products_viewer
    }
    errors {
      id
      message
      data {
        type
      }
    }
  }
`;

const render = ({error, props}) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props && props.viewer) {
    return <Products viewer={props.viewer} />;
  }
  return <div>Loading</div>;
};

export default class ProductsContainer extends Component {

  render () {
    return (
      <QueryRenderer
        environment={environment}
        query={productsQuery}
        render={render}
      />
    );
  }
}
