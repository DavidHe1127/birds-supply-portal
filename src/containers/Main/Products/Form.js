import React from 'react';
import styled from 'styled-components';

import { Form, Header, Image } from 'semantic-ui-react';
import avatar from 'images/parrot_avatar.png';

const Avatar = styled.div`
  margin-bottom: 10px;
  background: #e6f2ff;
`;

export default class FormContainer extends React.Component {
  render() {
    return (
      <Form>
        <Avatar>
          <Image circular centered src={avatar} size="small" />
        </Avatar>
        <Form.Group widths="equal">
          <Form.Input
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
      </Form>
    );
  }
}