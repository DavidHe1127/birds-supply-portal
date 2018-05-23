import React from 'react';
import {
  Container,
  Divider,
  Header,
  Table,
  Button
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import RequestTableHeader from './Table.Header';
import RequestTableBody from './Table.Body';

const _REQUESTS = [{
  reqId: '1jkl',
  bird: 'caique',
  code: 'caique',
  reason: 'It\'s missing from our system',
  status: 'approved'
}, {
  reqId: 'cj31',
  bird: 'sun conure',
  code: 'sun_conure',
  reason: 'We have a new request from customers for this',
  status: 'rejected'
}, {
  reqId: '7ouv',
  bird: 'indian ringneck',
  code: 'indian_ringneck',
  reason: 'A beautiful bird',
  status: 'pending'
}];

class Requests extends React.Component {

  onNewRequestClick = e => this.props.history.push('/requests/new')

  render() {
    return (
      <Container>
        <Button content='New Request' primary onClick={this.onNewRequestClick} />
        <Header as="h1">Your Requests</Header>
        <Divider />
        <Table celled>
          <RequestTableHeader />
          <RequestTableBody requests={_REQUESTS} />
        </Table>
      </Container>
    );
  }
}

export default withRouter(Requests);
