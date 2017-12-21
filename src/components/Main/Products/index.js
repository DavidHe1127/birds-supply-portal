import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Header, Search, Container } from 'semantic-ui-react';

import src from 'images/elliot.jpg';
import ProductList from './ProductList';

// import styled from 'styled-components';

class Products extends Component {
  render() {
    const products = this.props.products.edges.map(x => ({
      id: x.node.id,
      price: x.node.price,
      name: x.node.parrot.name,
      supplier: x.node.supplier.name
    }));

    return (
      <Container>
        <Header>
          <Search />
        </Header>
        <Container>
          <ProductList {...{ products }} />
        </Container>
      </Container>
    );
  }
}

export default createFragmentContainer(
  Products,
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