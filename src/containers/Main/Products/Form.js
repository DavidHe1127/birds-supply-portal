import React from 'react';
import styled from 'styled-components';

import { Form, Header, Image } from 'semantic-ui-react';
import avatar from 'images/parrot_avatar.svg';

const Avatar = styled.div`
  margin-bottom: 10px;
  background: #f2f3f4;
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
            label="Name"
            placeholder="Name"
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Size"
            placeholder="Size"
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Mass"
            placeholder="Mass in g"
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Distribution"
            placeholder="Distribution"
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Lifespan"
            placeholder="Lifespan"
          />
        </Form.Group>
      </Form>
    );
  }
}