import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import {Form, Select, Button} from 'semantic-ui-react';

import addProductMutation from 'mutations/addProductMutation';
import setProductMutation from 'mutations/setProductMutation';

import ImagePreview from 'helpers/ImagePreview';
import upload from 'utils/upload';
import withAuth from 'utils/withAuth';
import buildFileUploadUrl from 'utils/buildFileUploadUrl';

const uploadWithAuth = withAuth(upload);

const Actions = styled.div`
  text-align: center;
`;

class FormContainer extends React.Component {
  state = {
    price: 0,
    qty: 0,
    parrot: null,
    file: null
  }

  onChange = (e, {name, value}) => {
    this.setState({
      [name]: value,
    });
  }

  syncAvatar = () => {
    return uploadWithAuth({
      url: buildFileUploadUrl({
        name: this.state.parrot,
        type: this.state.file.type
      }),
      file: this.state.file
    });
  }

  onImageSet = file => {
    this.setState({
      file
    });
  }

  onAddProduct = () => {
    const {price, qty, parrot, file} = this.state;

    if (file) {
      return this.syncAvatar().then(res => {
          return addProductMutation({ price, parrot, qty }, this.navigateOnAction);
        })
        .catch(err => {
          console.log('avatar error', err);
        });
    }

    return addProductMutation({ price, parrot, qty }, this.navigateOnAction);
  }

  onSubmit = () => {
    if (this.props.isNew) {
      return this.onAddProduct();
    }

    setProductMutation(
      {
        id: this.props.productId,
        qty: this.state.qty,
        price: this.state.price,
      },
      this.navigateOnAction,
    );
  }

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
        <ImagePreview onImageSet={this.onImageSet} />
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
          <Button positive>Submit</Button>
          <Button negative>Cancel</Button>
        </Actions>
      </Form>
    );
  }
}

export default withRouter(FormContainer);
