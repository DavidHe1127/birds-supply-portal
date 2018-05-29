import React from 'react';
import {Table, Label, Button} from 'semantic-ui-react';
import { createFragmentContainer, graphql } from 'react-relay';

const STATUS_LABEL_COLOR = {
  pending: 'blue',
  rejected: 'red',
  approved: 'green',
};

class RequestTableRow extends React.Component {
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
        <Table.Cell>
          <Button.Group>
            <Button positive onClick={this.props.onApproveClick}>
              Approve
            </Button>
            <Button.Or />
            <Button negative onClick={this.props.onRejectClick}>
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
