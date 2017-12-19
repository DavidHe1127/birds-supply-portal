import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Header, Search, Container, Card } from 'semantic-ui-react';

import src from 'images/elliot.jpg';

// import styled from 'styled-components';

class Products extends Component {
  render() {
    console.log(this.props.products);
    return (
      <Container>
        <Header>
          <Search />
        </Header>
        <Container>
          <Card.Group itemsPerRow={4}>
            <Card color="red" image={src} />
            <Card color="orange" image={src} />
            <Card color="yellow" image={src} />
            <Card color="olive" image={src} />
            <Card color="green" image={src} />
            <Card color="teal" image={src} />
            <Card color="blue" image={src} />
            <Card color="violet" image={src} />
            <Card color="purple" image={src} />
            <Card color="pink" image={src} />
            <Card color="brown" image={src} />
            <Card color="grey" image={src} />
          </Card.Group>
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