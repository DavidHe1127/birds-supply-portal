import React from 'react';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './styles/index.css';

const Signup = () => (
  <Grid
    textAlign="center"
    container
    verticalAlign="middle"
  >
    <Grid.Column style={{maxWidth: 450}}>
      <Header as="h2" color="#031727" textAlign="center">
        Log into your account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input fluid placeholder="abc@abc.com" />
          <Form.Input
            fluid
            type="password"
            placeholder="Require min length 8 & lowercase letters"
          />
          <Form.Input fluid placeholder="First Name" />
          <Form.Input fluid placeholder="Last Name" />
          <Button color="teal" fluid size="large">
            Sign Up Today
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to="/login">Log In</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Signup;