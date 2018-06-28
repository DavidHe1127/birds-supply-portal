import React from 'react';
import {Container, Divider, Header, Table, Icon} from 'semantic-ui-react';

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
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>No Name Specified</Table.Cell>
              <Table.Cell>Unknown</Table.Cell>
              <Table.Cell negative>None</Table.Cell>
            </Table.Row>
            <Table.Row positive>
              <Table.Cell>Jimmy</Table.Cell>
              <Table.Cell>
                <Icon name="checkmark" />
                Approved
              </Table.Cell>
              <Table.Cell>None</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie</Table.Cell>
              <Table.Cell>Unknown</Table.Cell>
              <Table.Cell positive>
                <Icon name="close" />
                Requires call
              </Table.Cell>
            </Table.Row>
            <Table.Row negative>
              <Table.Cell>Jill</Table.Cell>
              <Table.Cell>Unknown</Table.Cell>
              <Table.Cell>None</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}
//          <RequestTableHeader />
//          <Table.Body></Table.Body>

export default Messages;
