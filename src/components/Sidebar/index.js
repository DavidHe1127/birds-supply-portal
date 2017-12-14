import React, { Component } from 'react';

import { Sidebar as Sb, Menu } from 'semantic-ui-react';
import Menus from './Menus';

const Sidebar = ({ path }) => (
  <Sb
    as={Menu}
    animation="overlay"
    width="thin"
    visible
    icon="labeled"
    vertical
    inverted
  >
    <Menus path={path} />
  </Sb>
);

export default Sidebar;