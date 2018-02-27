import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import Products from 'components/Main/Products';

const productsQuery = graphql`
  query ProductsContainerQuery {
    errors {
      message
      path
    }
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

export default class ProductsContainer extends Component {

  onAuthFail () {
    this.props.history.push('/login');
  }

  render () {
    return (
      <QueryRenderer
        environment={environment}
        query={productsQuery}
        render={({ error, props }) => {
          if (props && props.errors[0].data.type === 'AUTH') {
            this.onAuthFail();
            return null;
          }

          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log('xxxx');
            return <Products products={props} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
