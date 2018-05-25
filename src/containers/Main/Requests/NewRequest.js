import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Header, Button, Form} from 'semantic-ui-react';

import addNewParrotRequestMutation from 'mutations/addNewParrotRequestMutation';
import Common from 'components/common';

class NewRequestForm extends React.Component {
  state = {
    parrot: null,
    code: '',
    reason: null,
  }

  onOperationSuccess = e => this.props.history.push('/requests')

  onCancel = e => this.props.history.push('/requests')

  onSubmit = e => {
    const props = {
      parrot: this.state.parrot,
      code: this.state.code,
      reason: this.state.reason
    };

    addNewParrotRequestMutation(props, this.onOperationSuccess);
  }

  checkParrotExistence = () => {


    // ifParrotExist
  }

  onChange = (e, {name, value}) => {
    const toUpdate = {
      [name]: value
    };

    if (name === 'parrot') {
      toUpdate.code = value.toLowerCase();
    }

    this.setState(toUpdate);
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
            value={this.state.code}
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
