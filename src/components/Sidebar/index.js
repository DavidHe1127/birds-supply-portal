import React from 'react';
import { Sidebar as Sb, Menu } from 'semantic-ui-react';
import Menus from './Menus';
import Profile from './Profile';

import './styles/index.css';

const Sidebar = ({ path }) => (
  <Sb
    as={Menu}
    animation="overlay"
    width="thin"
    visible
    icon="labeled"
    vertical
    className='sidebar'

  >
    <Menus path={path} />
    <Profile />
  </Sb>
);

    // inverted
export default Sidebar;