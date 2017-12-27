import React from 'react';
import { Card } from 'semantic-ui-react';

import src from 'images/elliot.jpg';
import './styles/index.css';

const Products = ({ products }) => {
  const rows = products.map(p => (
    <Card
      image={src}
      header={p.name}
      className='shadow'
      key={p.id}
      meta={p.price.toLocaleString('en-au', {
        style: 'currency',
        currency: 'AUD'
      })}
      extra={p.supplier}
    />
  ));

  return <Card.Group itemsPerRow={4}>{rows}</Card.Group>;
};

export default Products;
