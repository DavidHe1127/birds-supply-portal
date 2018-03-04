import React from 'react';
import { Icon, Popup, List } from 'semantic-ui-react';
import styled from 'styled-components';

import './styles/index.css';

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 15px;
`;

const Option = styled.a`
  color: #000;
  font-size: 14px;

  &:hover {
    color: var(--amber);
  }
`;

const Profile = () => (
  <Wrapper>
    <Popup
      trigger={<Icon name="user circle" size="big" className="profile" />}
      position="right center"
      on="click"
    >
      <Popup.Content>
        <List divided verticalAlign="middle" size="big">
          <List.Item>
            <List.Header>
              <Option>Settings</Option>
            </List.Header>
          </List.Item>
          <List.Item>
            <List.Header>
              <Option>Users</Option>
            </List.Header>
          </List.Item>
          <List.Item>
            <List.Header>
              <Option>Logout</Option>
            </List.Header>
          </List.Item>
        </List>
      </Popup.Content>
    </Popup>
  </Wrapper>
);

export default Profile;
