import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

import {Form, Select, Button} from 'semantic-ui-react';

import addProductMutation from 'mutations/addProductMutation';
import setProductMutation from 'mutations/setProductMutation';

import ImagePreview from 'helpers/ImagePreview';
import { upload } from 'utils/network';
import { withAuth } from 'utils/decorator';
import buildUrl from 'utils/buildUrl';
import getTypeExtFromMime from 'utils/getTypeExtFromMime';

import Spinner from 'helpers/Spinner';
import {actions, connect} from 'store';

const uploadWithAuth = withAuth(upload);

const Actions = styled.div`
  text-align: center;
`;

class FormContainer extends React.Component {
  state = {
    price: null,
    qty: null,
    parrot: null,
    file: null,
    avatarSrc: null
  }

  onChange = (e, {name, value}) => {
    this.setState({
      [name]: value,
    });
  }

  syncAvatar = () => {
    const { ext } = getTypeExtFromMime(this.state.file.type);

    return uploadWithAuth({
      url: buildUrl.upload({
        name: this.state.parrot,
        ext
      }),
      file: this.state.file
    }).then(res => this.state.parrot + '.' + ext);
  }

  onImageSet = (file, src) => {
    this.setState({
      file,
      avatarSrc: src
    });
  }

  onAddProduct = () => {
    const {price, qty, parrot, file} = this.state;

    if (file) {
      return this.syncAvatar()
        .then(res => {
          const avatar = res;
          return addProductMutation(
            {price, parrot, qty, avatar},
            this.onMutationDone,
          );
        })
        .catch(err => {
          // TODO handle failed image upload error
          console.log('err', err);
        })
        .finally(() => {
          actions.toggleLoading({
            loading: false,
          });
        });
    }

    return addProductMutation({price, parrot, qty}, this.onMutationDone);
  }

  onSubmit = () => {
    actions.toggleLoading({
      loading: true
    });

    if (this.props.isNew) {
      return this.onAddProduct();
    }

    setProductMutation(
      {
        id: this.props.productId,
        qty: this.state.qty,
        price: this.state.price,
      },
      this.onMutationDone,
    );
  }

  onMutationDone = () => {
    actions.toggleLoading({
      loading: false
    });
    this.props.history.push('/products');
  }

  render() {
    const { loading } = this.props;

    if (this.props.isNew) {
      var parrots = this.props.parrotsToProduct.edges.map(p => ({
        key: p.node.id,
        value: p.node.code,
        text: p.node.code,
      }));
    }

    const defaultPrice = this.props.isNew ? this.state.price : this.props.productToEdit.price;
    const defaultQty = this.props.isNew ? this.state.qty : this.props.productToEdit.qty;

    const view = (
      <Form onSubmit={this.onSubmit}>
        <ImagePreview onImageSet={this.onImageSet} src={this.state.avatarSrc} />
        <Form.Input
          id="parrot_price"
          label="Price"
          placeholder="price"
          type="number"
          max="999999"
          name="price"
          onChange={this.onChange}
          defaultValue={defaultPrice}
        />
        <Form.Input
          id="parrot_qty"
          label="Qty"
          placeholder="qty"
          type="number"
          max="999"
          name="qty"
          onChange={this.onChange}
          defaultValue={defaultQty}
        />
        {this.props.isNew && (
          <Form.Field
            control={Select}
            label="Parrot"
            options={parrots}
            placeholder="Parrot Code"
            name="parrot"
            defaultValue={this.state.parrot}
            onChange={this.onChange}
          />
        )}
        <Actions>
          <Button positive>Submit</Button>
          <Button negative>Cancel</Button>
        </Actions>
      </Form>
    );

    if (loading) {
      return <Spinner>{view}</Spinner>;
    }

    return view;
  }
}

const AppWithConsumer = connect(state => ({
  loading: state.loading
}))(FormContainer);

export default withRouter(AppWithConsumer);
