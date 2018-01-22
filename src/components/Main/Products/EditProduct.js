import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Container } from 'semantic-ui-react';

import Form from 'containers/Main/Products/Form';

// import src from 'images/elliot.jpg';
import './styles/index.css';

class EditProduct extends React.Component {
  render() {
    return (
      <Container text>
        <Form productToEdit={this.props.productToEdit} productId={this.props.productId} />
      </Container>
    );
  }
}

export default createFragmentContainer(
  EditProduct,
  graphql`
    fragment EditProduct_productToEdit on Product {
      price
      qty
      parrot {
        code
      }
    }
  `
);
