import React from 'react';
import {Table, Label} from 'semantic-ui-react';

const STATUS_LABEL_COLOR = {
  pending: 'blue',
  rejected: 'red',
  approved: 'green',
};

const RequestTableHeader = ({requests}) => {
  const rows = requests.map(x => (
    <Table.Row>
      <Table.Cell>{x.reqId}</Table.Cell>
      <Table.Cell>{x.bird}</Table.Cell>
      <Table.Cell>{x.code}</Table.Cell>
      <Table.Cell>{x.reason}</Table.Cell>
      <Table.Cell>
        <Label color={STATUS_LABEL_COLOR[x.status]} tag>
          {x.status}
        </Label>
      </Table.Cell>
    </Table.Row>
  ));

  return <Table.Body>{rows}</Table.Body>;
};

export default RequestTableHeader;
