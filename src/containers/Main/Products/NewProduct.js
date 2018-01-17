import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import NewProduct from 'components/Main/Products/NewProduct';

const queries = {
  newProduct: graphql`
    query NewProductContainerQuery {
      parrotsToProduct {
        ...NewProduct_parrotsToProduct
      }
    }
  `,
  editProduct: graphql`
    query NewProductContainerQuery($id: ID!) {
      product(id: $id) {
        price
        qty
        parrot {
          code
        }
      }
    }
  `
};

export default class NewProductContainer extends React.Component {
  variables = {
    id: null,
  }

  render() {
    this.variables.id = this.props.match.params.productId;

    const query = !!this.variables.id ? queries.editProduct : queries.newProduct;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={this.variables}
        render={({ error, props }) => {
          console.log(props);
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <NewProduct {...props} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
