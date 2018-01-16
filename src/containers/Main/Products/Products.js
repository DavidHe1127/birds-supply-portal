import React from 'react';
import { Confirm, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import delProductMutation from 'mutations/delProductMutation';
import Product from 'components/Main/Products/Product';

class ProductsContainer extends React.Component {
  state = {
    open: false,
    product: null,
    id: null
  };

  onDelete = (e, { id, name }) => this.setState({ open: true, id, name });

  onCancel = e => this.setState({ open: false });

  onConfirm = e => {
    this.setState({ open: false }, () => {
      delProductMutation(this.state.id, this.props.viewerId, () =>
        this.props.history.push(`/products`)
      );
    });
  };

  render() {
    const rows = this.props.products.edges.map(e => (
      <Product {...e.node} onDelete={this.onDelete} key={e.node.id} />
    ));

    return (
      <div>
        <Card.Group itemsPerRow={4}>{rows}</Card.Group>
        <Confirm
          open={this.state.open}
          content={`Are you sure you want to delete ${this.state.product}?`}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
      </div>
    );
  }
}

export default withRouter(ProductsContainer);
