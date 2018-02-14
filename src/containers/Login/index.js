import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './styles/index.css';

const Login = () => (
  <Grid centered verticalAlign="middle" columns={4} className="login">
    <Grid.Column>
      <Header as="h2" color="#031727" textAlign="center">
        Log into your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input fluid label="Username" placeholder="abc@abc.com" />
          <Form.Input fluid label="Password" type="password" />
          <Button color="teal" fluid size="large">
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

export default Login;
