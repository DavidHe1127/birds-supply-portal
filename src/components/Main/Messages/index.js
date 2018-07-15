import React from 'react';
import {Container, Divider, Header, Table, Icon} from 'semantic-ui-react';
import {actions, connect} from 'store';

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
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.newBirdRequestResultNotifications.map(x => {
      const body = JSON.parse(x.Body);
      const message = JSON.parse(body.Message);
      const props = {};

      if (message.status.toLowerCase() === 'rejected') {
        props.negative = true;
      } else {
        props.positive = true;
      }

      return (
        <Table.Row key={x.MessageId}>
          <Table.Cell>{x.MessageId}</Table.Cell>
          <Table.Cell {...props}>{message.status}</Table.Cell>
          <Table.Cell>{message.reason}</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <Container>
        <Header as="h1">Your Requests</Header>
        <Divider />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Feedback</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {messages}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}
//          <RequestTableHeader />
//          <Table.Body></Table.Body>

/*
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
*/

export default connect(state => ({
  newBirdRequestResultNotifications: state.newBirdRequestResultNotifications,
}))(Messages);