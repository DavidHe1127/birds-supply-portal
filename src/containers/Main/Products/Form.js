import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import {Form, Image, Select, Button} from 'semantic-ui-react';
import avatar from 'images/parrot_avatar.jpg';

import addProductMutation from 'mutations/addProductMutation';
import setProductMutation from 'mutations/setProductMutation';

import ImageUploader from 'helpers/ImageUploader';

const Actions = styled.div`
  text-align: center;
`;

class FormContainer extends React.Component {
  state = {
    price: 0,
    qty: 0,
    parrot: null,
  };

  onChange(e, {name, value}) {
    this.setState({
      [name]: value,
    });
  }

  onSubmit = () => {
    const {price, qty, parrot} = this.state;

    if (this.props.isNew) {
      return addProductMutation({price, parrot, qty}, this.navigateOnAction);
    }

    setProductMutation(
      {
        id: this.props.productId,
        qty,
        price,
      },
      this.navigateOnAction,
    );
  };

  navigateOnAction() {
    this.props.history.push(`/products`);
  }

  render() {
    if (this.props.isNew) {
      var parrots = this.props.parrotsToProduct.edges.map(p => ({
        key: p.node.id,
        value: p.node.code,
        text: p.node.code,
      }));
    }

    return (
      <Form onSubmit={this.onSubmit}>
        <ImageUploader circular src={avatar} size="medium" />
        <Form.Input
          id="parrot_price"
          label="Price"
          placeholder="price"
          type="number"
          max="999999"
          name="price"
          onChange={this.onChange}
          defaultValue={!this.props.isNew && this.props.productToEdit.price}
        />
        <Form.Input
          id="parrot_qty"
          label="Qty"
          placeholder="qty"
          type="number"
          max="999"
          name="qty"
          onChange={this.onChange}
          defaultValue={!this.props.isNew && this.props.productToEdit.qty}
        />
        {this.props.isNew && (
          <Form.Field
            control={Select}
            label="Parrot"
            options={parrots}
            placeholder="Parrot Code"
            name="parrot"
            onChange={this.onChange}
          />
        )}
        <Actions>
          <Button positive>Action</Button>
          <Button negative>Cancel</Button>
        </Actions>
      </Form>
    );
  }
}

export default withRouter(FormContainer);
