import React from 'react';
import { Confirm } from 'semantic-ui-react';

import Products from 'components/Main/Products/Products';

class ProductsContainer extends React.Component {
  state = {
    open: false
  }

  onDelete = e => this.setState({ open: true })

  onCancel = e => this.setState({ open: false })

  onConfirm = e => {
    this.setState({ open: false }, () => {
      alert('fuck off!!');
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
          content={"Are you sure you want to delete this product?"}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
      </div>
    );
  }
}

export default ProductsContainer;
