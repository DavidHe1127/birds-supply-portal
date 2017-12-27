import React from 'react';

import { Form } from 'semantic-ui-react';

export default class FormContainer extends React.Component {
  render() {
    return (
      <Form>
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