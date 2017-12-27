import React, { Component } from 'react';

import { Header as Hdr, Button, List, Search } from 'semantic-ui-react';

const Header = () => (
  <Hdr>
    <List horizontal>
      <List.Item>
        <Search />
      </List.Item>
      <List.Item>
        <Button primary>New Product</Button>
      </List.Item>
    </List>
  </Hdr>
);

export default Header;
