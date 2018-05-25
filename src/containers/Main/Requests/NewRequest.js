import React from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Header, Button, Form, Message} from 'semantic-ui-react';

import addNewParrotRequestMutation from 'mutations/addNewParrotRequestMutation';
import Common from 'components/common';

import query from 'queries';

class NewRequestForm extends React.Component {
  state = {
    parrot: null,
    code: '',
    reason: null,
    error: null
  }

  onOperationSuccess = e => this.props.history.push('/requests')

  onCancel = e => {
    e.preventDefault();
    this.props.history.push('/requests');
  }

  onSubmit = e => {
    if (this.state.error) {
      return;
    }

    const props = {
      parrot: this.state.parrot,
      code: this.state.code,
      reason: this.state.reason
    };

    addNewParrotRequestMutation(props, this.onOperationSuccess);
  }

  checkParrotExistence = parrtCode => {
    query('ifParrotExist', {
      code: parrtCode
    }).then(({ ifParrotExist }) =>
      this.setState({
        error: !!ifParrotExist
      })
    );
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

  onBlur = () => this.state.code.trim() && this.checkParrotExistence(this.state.code)

  render() {
    const FormProps = {
      onSubmit: this.onSubmit,
      error: this.state.error
    };

    return (
      <Container text>
        <Header as="h1">New Parrot Request</Header>
        <Form {...FormProps}>
          {this.state.error && <Message
            error
            header='Oops! Something went wrong!'
            content='Parrot code already exists in the system! Please use a different one.'
          />}
          <Form.Input
            id="parrot"
            label="Parrot"
            name="parrot"
            placeholder="Parrot name i.e caique, sun conure"
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <Form.Input
            id="code"
            label="Code"
            name="code"
            placeholder="Your parrot code. i.e xxx-yyy If leave blank, lowercase of parrot will then be used"
            onChange={this.onChange}
            onBlur={this.onBlur}
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
