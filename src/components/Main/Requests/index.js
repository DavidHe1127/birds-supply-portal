import React from 'react';
import {Container, Divider, Header, Table, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import {createFragmentContainer, graphql} from 'react-relay';

import RequestTableHeader from './TableHeader';
import RequestTableRow from './TableRow';
import setRequestStatusMutation from 'mutations/setRequestStatusMutation';

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

class Requests extends React.Component {

  state = {
    actionRequestId: null
  }

  onNewRequestClick = e => this.props.history.push('/requests/new')

  onApproveClick = e => {
    setRequestStatusMutation({
      id: this.status.id,
      status: 'approved'
    }, this.onApproved);
  }

  onRejectClick = e => {
    setRequestStatusMutation({
      id: this.status.id,
      status: 'rejected'
    }, this.onRejected);
  }

  onApproved = e => {

  }

  onRejected = e => {

  }

  render() {
    const rows = this.props.viewer.requests.edges.map(x => (
      <RequestTableRow key={x.node.id} request={x.node} />
    ));

    return (
      <Container>
        <Button
          content="New Request"
          primary
          onClick={this.onNewRequestClick}
        />
        <Header as="h1">Your Requests</Header>
        <Divider />
        <Table celled>
          <RequestTableHeader />
          <Table.Body>{rows}</Table.Body>
        </Table>
      </Container>
    );
  }
}

export default withRouter(
  createFragmentContainer(
    Requests,
    graphql`
      fragment Requests_viewer on User {
        requests(first: 50) @connection(key: "Requests_requests", filters: []) {
          edges {
            cursor
            node {
              ...TableRow_request
            }
          }
        }
      }
    `,
  ),
);
