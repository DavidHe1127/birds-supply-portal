import React from 'react';
import { Confirm } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import delProductMutation from 'mutations/delProductMutation';
import Products from 'components/Main/Products/Products';

class ProductsContainer extends React.Component {
  state = {
    open: false,
    product: null,
    id: null
  }

  onDelete = (e, { name, id }) => this.setState({ open: true, name, id })

  onCancel = e => this.setState({ open: false })

  onConfirm = e => {
    this.setState({ open: false }, () => {
      delProductMutation(this.state.id, () => this.props.history.push(`/products`));
    });
  }

  render() {
    return (
      <div>
        <Products
          {...{ products: this.props.products }}
          onDelete={this.onDelete}
        />
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
