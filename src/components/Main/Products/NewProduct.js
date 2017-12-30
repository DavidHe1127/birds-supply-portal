import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Container } from 'semantic-ui-react';

import Form from 'containers/Main/Products/Form';

// import src from 'images/elliot.jpg';
import './styles/index.css';

class NewProduct extends React.Component {
  render() {
    return (
      <Container text>
        <Form />
      </Container>
    );
  }
}

export default createFragmentContainer(
  NewProduct,
  graphql`
    fragment NewProduct_parrotsToProduct on ParrotConnection {
      edges {
        node {
          id
          code
        }
      }
    }
  `
);
