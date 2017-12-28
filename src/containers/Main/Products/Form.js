import React from 'react';
import styled from 'styled-components';

import { Form, Header, Image, Select } from 'semantic-ui-react';
import avatar from 'images/parrot_avatar.svg';

const Avatar = styled.div`
  margin-bottom: 10px;
  background: #f2f3f4;
`;

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];


export default class FormContainer extends React.Component {
  render() {
    return (
      <Form>
        <Avatar>
          <Image circular centered src={avatar} size="small" />
        </Avatar>
        <Form.Input
          id="form-subcomponent-shorthand-input-first-name"
          label="price"
          placeholder="Price"
        />
        <Form.Input
          id="form-subcomponent-shorthand-input-first-name"
          label="qty"
          placeholder="Qty"
          type="number"
          max="100"
        />
        <Form.Field control={Select} label='Parrot' options={options} placeholder='Gender' />
      </Form>
    );
  }
}