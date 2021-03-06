import React from 'react';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Auth} from 'aws-amplify';

import auth from 'auth';
import Spinner from 'helpers/Spinner';
import {actions, connect} from 'store';

import './styles/index.css';

class Login extends React.Component {
  state = {
    username: null,
    password: null,
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = e => {
    const username = this.state.username.trim();
    const password = this.state.password.trim();

    actions.toggleLoading({
      loading: true,
    });

    Auth.signIn(username, password)
      .then(session => {
        const {signInUserSession} = session;
        auth.set(signInUserSession);
        this.props.history.push('/products');
      })
      .catch(err => {
        // TODO handle errors on failed signin
        return {
          error: err.message,
        };
      })
      .finally(() => {
        actions.toggleLoading({
          loading: false,
        });
      });
  }

  render() {
    const view = (
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
                defaultValue={this.state.username}
              />
              <Form.Input
                fluid
                name="password"
                label="Password"
                type="password"
                onChange={this.onChange}
                defaultValue={this.state.password}
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

    if (this.props.loading) {
      return <Spinner>{view}</Spinner>
    }

    return view;
  }
}

export default connect(state => ({
  loading: state.loading
}))(Login);
