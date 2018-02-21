import React from 'react';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Auth} from 'aws-amplify';

import auth from 'auth';

import './styles/index.css';

export default class Login extends React.Component {
  state = {
    username: null,
    password: null,
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    const username = this.state.username.trim();
    const password = this.state.password.trim();

    Auth.signIn(username, password)
      .then(session => {
        const { signInUserSession } = session;
        auth.set(signInUserSession);
        this.props.history.push('/products');
      })
      .catch(err => {
        error: err.message;
      });
  };

  render() {
    return (
      <Grid centered verticalAlign="middle" columns={4} className="login">
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Log into your account
          </Header>
          <Form size="large" onSubmit={this.onSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                label="Username"
                placeholder="abc@abc.com"
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                name="password"
                label="Password"
                type="password"
                onChange={this.onChange}
              />
              <Button color="yellow" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
