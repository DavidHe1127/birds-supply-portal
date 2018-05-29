import React from 'react';
import {Table, Label, Button} from 'semantic-ui-react';

const STATUS_LABEL_COLOR = {
  pending: 'blue',
  rejected: 'red',
  approved: 'green',
};

const RequestTableRow = ({request, onApproveClick, onRejectClick}) => (
  <Table.Row>
    <Table.Cell>{request.id}</Table.Cell>
    <Table.Cell>{request.parrot}</Table.Cell>
    <Table.Cell>{request.code}</Table.Cell>
    <Table.Cell>{request.reason}</Table.Cell>
    <Table.Cell>
      <Label color={STATUS_LABEL_COLOR[request.status]}>{request.status.toUpperCase()}</Label>
    </Table.Cell>
    <Table.Cell>
      <Button.Group>
        <Button positive onClick={onApproveClick}>Approve</Button>
        <Button.Or />
        <Button negative onClick={onRejectClick}>Reject</Button>
      </Button.Group>
    </Table.Cell>
  </Table.Row>
);

export default RequestTableRow;
