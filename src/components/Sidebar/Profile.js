import React from 'react';
import {Icon, Popup, List} from 'semantic-ui-react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {Auth} from 'aws-amplify';
import auth from 'auth';

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

class Profile extends React.Component {

  onItemClick = (e, props) => {
    if (props.name === 'logout') {
      return Auth.signOut()
        .then(data => {
          auth.purge();
          this.props.history.push('/login');
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
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
              <List.Item onClick={this.onItemClick} name="logout">
                <List.Header>
                  <Option>Logout</Option>
                </List.Header>
              </List.Item>
            </List>
          </Popup.Content>
        </Popup>
      </Wrapper>
    );
  }
}

export default withRouter(Profile);
