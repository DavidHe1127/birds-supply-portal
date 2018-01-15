import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Card, Image, Icon, Grid } from 'semantic-ui-react';

import src from 'images/elliot.jpg';
import './styles/index.css';

const Product = ({ product, parrot, supplier, onDelete }) => {
  const withProdNameOnDelete = e =>
    onDelete(e, {
      sku: product.sku,
      id: product.id
    });

  return (
    <Card className="shadow" key={product.id}>
      <Image src={src} />
      <Card.Content>
        <Card.Header>{product.sku}</Card.Header>
        <Card.Description>
          {product.price.toLocaleString('en-au', {
            style: 'currency',
            currency: 'AUD'
          })}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={8}>
            {supplier.name}
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Icon
              className="highlight"
              name="recycle"
              onClick={withProdNameOnDelete}
            />
          </Grid.Column>
        </Grid.Row>
      </Card.Content>
    </Card>
  );
};

// TODO separate each model out of product
export default createFragmentContainer(Product, {
  product: graphql`
    fragment Product_product on Product {
      id
      price
      sku
    }
  `,
  parrot: graphql`
    fragment Parrot_parrot on Parrot {
      name
      description
    }
  `,
  supplier: graphql`
    fragment Supplier_supplier on Supplier {
      name
    }
  `
});
