import React from 'react';
import { Card, Image, Icon, Grid } from 'semantic-ui-react';

import src from 'images/elliot.jpg';
import './styles/index.css';

const Products = ({ products }) => {
  const rows = products.map(p => (
    <Card className="shadow" key={p.id}>
      <Image src={src} />
      <Card.Content>
        <Card.Header>{p.name}</Card.Header>
        <Card.Description>
          {p.price.toLocaleString('en-au', {
            style: 'currency',
            currency: 'AUD'
          })}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={8}>
            {p.supplier}
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Icon className="highlight" name="recycle" />
          </Grid.Column>
        </Grid.Row>
      </Card.Content>
    </Card>
  ));

  return <Card.Group itemsPerRow={4}>{rows}</Card.Group>;
};

export default Products;