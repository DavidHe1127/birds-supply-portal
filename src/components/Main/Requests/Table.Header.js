import React from 'react';
import {Table} from 'semantic-ui-react';

const titles = ['ReqID', 'Parrot', 'Code', 'Reason', 'Status'];

const RequestTableHeader = () => {
  const cells = titles.map((x, i) => (
    <Table.HeaderCell key={i}>{x}</Table.HeaderCell>
  ));

  return (
    <Table.Header>
      <Table.Row>{cells}</Table.Row>
    </Table.Header>
  );
};

export default RequestTableHeader;
