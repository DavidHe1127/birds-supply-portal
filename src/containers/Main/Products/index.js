import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import { Confirm, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import delProductMutation from 'mutations/delProductMutation';
import Products from 'components/Main/Products';
import Header from 'components/Main/Products/Header';

const productsQuery = graphql`
  query ProductsContainerQuery {
    viewer {
      id
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
    return <ProductsContainerWithRouter viewer={props.viewer} />;
  }
  return <div>Loading</div>;
};

export default class ProductsIndexContainer extends Component {

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

class ProductsContainer extends React.Component {
  state = {
    open: false,
    product: null,
    id: null
  }

  onDelete = (e, { id, name }) => this.setState({ open: true, id, name })

  onCancel = e => this.setState({ open: false })

  addProduct = e => this.props.history.push('/products/new')

  onConfirm = e => {
    this.setState({ open: false }, () => {
      delProductMutation(this.state.id, this.props.viewer.id, () =>
        this.props.history.push(`/products`)
      );
    });
  }

  onEdit = (e, { id }) => this.props.history.push(`/products/${id}/edit`);

  render() {
    return (
      <Container>
        <Header addProduct={this.addProduct} />
        <Container>
          <Products viewer={this.props.viewer} onEdit={this.onEdit} onDelete={this.onDelete} />
          <Confirm
            open={this.state.open}
            content={`Are you sure you want to delete ${this.state.product}?`}
            onCancel={this.onCancel}
            onConfirm={this.onConfirm}
          />
        </Container>
      </Container>
    );
  }
}

const ProductsContainerWithRouter = withRouter(ProductsContainer);
