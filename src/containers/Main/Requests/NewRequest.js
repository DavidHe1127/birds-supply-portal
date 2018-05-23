import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Header, Button, Form} from 'semantic-ui-react';

import Common from 'components/common';

class NewRequestForm extends React.Component {
  state = {
    parrot: null,
    code: null,
    reason: null,
  }

  onCancel = e => this.props.history.push('/requests')

  onSubmit = e => {
    console.log(this.state)
  }

  onChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    const props = {
      onCancel: this.onCancel,
    };

    return (
      <Container text>
        <Header as="h1">New Parrot Request</Header>
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            id="parrot"
            label="Parrot"
            name="parrot"
            placeholder="Parrot name i.e caique, sun conure"
            onChange={this.onChange}
          />
          <Form.Input
            id="code"
            label="Code"
            name="code"
            placeholder="Your parrot code. i.e xxx-yyy If leave blank, lowercase of parrot will then be used"
            onChange={this.onChange}
          />
          <Form.TextArea
            label="Reason"
            name="reason"
            placeholder="Tell us the reason you need this new parrot"
            onChange={this.onChange}
          />
          <Common.Centralizer>
            <Button positive>Submit</Button>
            <Button negative onClick={this.onCancel}>
              Cancel
            </Button>
          </Common.Centralizer>
        </Form>
      </Container>
    );
  }
}

export default withRouter(NewRequestForm);
