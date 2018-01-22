import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import EditProduct from 'components/Main/Products/EditProduct';

const query = graphql`
  query EditProductContainerQuery($id: ID!) {
    product(id: $id) {
      ...EditProduct_productToEdit
    }
  }
`;

export default class EditProductContainer extends React.Component {
  variables = {
    id: null,
  }

  render() {
    this.variables.id = this.props.match.params.productId;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={this.variables}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <EditProduct productToEdit={props.product} productId={this.variables.id} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
