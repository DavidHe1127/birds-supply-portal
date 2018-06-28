import React from 'react';
import {Container, Divider, Header, Table } from 'semantic-ui-react';

// import RequestTableHeader from './TableHeader';
// import RequestTableRow from 'containers/Main/Requests/TableRow';

// const _REQUESTS = [{
//   reqId: '1jkl',
//   parrot: 'caique',
//   code: 'caique',
//   reason: 'It\'s missing from our system',
//   status: 'approved'
// }, {
//   reqId: 'cj31',
//   parrot: 'sun conure',
//   code: 'sun_conure',
//   reason: 'We have a new request from customers for this',
//   status: 'rejected'
// }, {
//   reqId: '7ouv',
//   parrot: 'indian ringneck',
//   code: 'indian_ringneck',
//   reason: 'A beautiful bird',
//   status: 'pending'
// }];

class Messages extends React.Component {

  render() {
    return (
      <Container>
        <Header as="h1">Your Requests</Header>
        <Divider />
        <Table striped>
        </Table>
      </Container>
    );
  }
}
//          <RequestTableHeader />
//          <Table.Body></Table.Body>

export default Messages;
