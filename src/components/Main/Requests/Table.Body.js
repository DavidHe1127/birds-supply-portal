import React from 'react';
import {Table, Label} from 'semantic-ui-react';

const STATUS_LABEL_COLOR = {
  pending: 'blue',
  rejected: 'red',
  approved: 'green',
};

const RequestTableBody = ({requests}) => {
  const rows = requests.map(x => (
    <Table.Row key={x.node.id}>
      <Table.Cell>{x.node.id}</Table.Cell>
      <Table.Cell>{x.node.parrot}</Table.Cell>
      <Table.Cell>{x.node.code}</Table.Cell>
      <Table.Cell>{x.node.reason}</Table.Cell>
      <Table.Cell>
        <Label color={STATUS_LABEL_COLOR[x.node.status]} tag>
          {x.node.status}
        </Label>
      </Table.Cell>
    </Table.Row>
  ));

  return <Table.Body>{rows}</Table.Body>;
};

export default RequestTableBody;
