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

const Signup = () => (
  <div className="login">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="#031727" textAlign="center">
          Log into your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
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
  </div>
);

export default Signup;
