import React from 'react';
import {Table, Label, Button} from 'semantic-ui-react';
import { createFragmentContainer, graphql } from 'react-relay';
import setRequestStatusMutation from 'mutations/setRequestStatusMutation';

const STATUS_LABEL_COLOR = {
  pending: 'blue',
  rejected: 'red',
  approved: 'green',
};

class RequestTableRow extends React.Component {

  onApproveClick = e => {
    setRequestStatusMutation({
      id: this.props.request.id,
      status: 'approved'
    }, this.onApproved);
  }

  onRejectClick = e => {
    setRequestStatusMutation({
      id: this.props.request.id,
      status: 'rejected'
    }, this.onRejected);
  }

  onApproved = e => {

  }

  onRejected = e => {

  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.request.id}</Table.Cell>
        <Table.Cell>{this.props.request.parrot}</Table.Cell>
        <Table.Cell>{this.props.request.code}</Table.Cell>
        <Table.Cell>{this.props.request.reason}</Table.Cell>
        <Table.Cell>
          <Label color={STATUS_LABEL_COLOR[this.props.request.status]}>
            {this.props.request.status.toUpperCase()}
          </Label>
        </Table.Cell>
        <Table.Cell textAlign="right">
          <Button.Group>
            <Button positive onClick={this.onApproveClick}>
              Approve
            </Button>
            <Button.Or />
            <Button negative onClick={this.onRejectClick}>
              Reject
            </Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default createFragmentContainer(
  RequestTableRow,
  graphql`
    fragment TableRow_request on Request {
      id
      parrot
      code
      reason
      status
    }
  `
);
