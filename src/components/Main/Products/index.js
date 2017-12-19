import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Header, Search, Container } from 'semantic-ui-react';

// import styled from 'styled-components';

class Products extends Component {
  render() {
    console.log(this.props.products);
    return (
      <Container>
        <Header>
          <Search />
        </Header>
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