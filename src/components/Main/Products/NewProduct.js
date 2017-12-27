import React from 'react';

import { Container } from 'semantic-ui-react';

import Form from 'containers/Main/Products/Form';

import src from 'images/elliot.jpg';
import './styles/index.css';

const NewProduct = ({ products }) => (
  <Container>
    <Form />
  </Container>
);

export default NewProduct;
