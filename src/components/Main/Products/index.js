import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import Header from './Header';
import src from 'images/elliot.jpg';
import Prods from './Products';
import Form from 'containers/Main/Products/Form';

class Products extends Component {
  addProduct = e => {
    // Form
    this.props.history.push('/products/new');
  };

  render() {
    const products = this.props.products.edges.map(x => ({
      id: x.node.id,
      price: x.node.price,
      name: x.node.parrot.name,
      supplier: x.node.supplier.name
    }));

    return (
      <Container>
        <Header addProduct={this.addProduct} />
        <Container>
          <Prods {...{ products }} />
        </Container>
      </Container>
    );
  }
}

export default createFragmentContainer(
  withRouter(Products),
  graphql`
    fragment Products_products on ProductConnection {
      edges {
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
  `
);