import React from 'react';
// import { createFragmentContainer, graphql } from 'react-relay';

import {Container, Header, Button, Form, TextArea} from 'semantic-ui-react';

// import Form from 'containers/Main/Products/Form';

class NewRequest extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1">New Bird Request</Header>
        <Form>
          <Form.Field>
            <label>Bird</label>
            <input placeholder="bird name i.e caique, sun conure" />
          </Form.Field>
          <Form.Field>
            <label>Code</label>
            <input placeholder="your bird code. i.e xxx-yyy If leave blank, lowercase of bird will then be used" />
          </Form.Field>
          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Tell us the reason you need this new bird"
          />
          <Button type="submit" positive>Submit</Button>
          <Button negative>Cancel</Button>
        </Form>
      </Container>
    );
  }
}

export default NewRequest;
