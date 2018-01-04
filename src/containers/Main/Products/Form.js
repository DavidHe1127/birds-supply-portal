import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { Form, Image, Select, Button } from 'semantic-ui-react';
import avatar from 'images/parrot_avatar.svg';

import addProductMutation from 'mutations/addProductMutation';

const Avatar = styled.div`
  margin-bottom: 10px;
  background: #f2f3f4;
`;

const Actions = styled.div`
  text-align: center;
`;

class FormContainer extends React.Component {

  state = {
    price: 0,
    qty: 0,
    parrot: null
  }

  onChange = (e, {name, value}) => this.setState({
    [name]: value
  })

  onSubmit = () => {
    const {price, qty, parrot} = this.state;
    addProductMutation({price, parrot, qty}, this.onAddProduct);
  }

  onAddProduct = () => this.props.history.push(`/products`)

  render() {
    const parrots = this.props.parrotsToProduct.edges.map(p => ({
      key: p.node.id,
      value: p.node.code,
      text: p.node.code
    }));

    return (
      <Form onSubmit={this.onSubmit}>
        <Avatar>
          <Image circular centered src={avatar} size="small" />
        </Avatar>
        <Form.Input
          id="parrot_price"
          label="Price"
          placeholder="price"
          type="number"
          max="999999"
          name="price"
          onChange={this.onChange}
        />
        <Form.Input
          id="parrot_qty"
          label="Qty"
          placeholder="qty"
          type="number"
          max="999"
          name="qty"
          onChange={this.onChange}
        />
        <Form.Field
          control={Select}
          label="Parrot"
          options={parrots}
          placeholder="Parrot Code"
          name="parrot"
          onChange={this.onChange}
        />
        <Actions>
          <Button positive>Action</Button>
          <Button negative>Cancel</Button>
        </Actions>
      </Form>
    );
  }
}

export default withRouter(FormContainer);
