import React from 'react';
import {Icon, Label} from 'semantic-ui-react';
import styled from 'styled-components';
import { poll, removeTimeout } from 'utils/network';
import {actions, connect} from 'store';

import newBirdRequest from 'apis/newBirdRequest';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;

  &:hover {
    color: #666;
    cursor: pointer;
  }
`;

class Messageinbox extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.refetch = poll(newBirdRequest.get, this.onMessageReceived);
  }

  onMessageReceived = res => {
    if (res.message.Messages) {
      actions.updateNewBirdRequestResultNotifications({
        newBirdRequestResultNotifications: res.message.Messages
      });

      this.setState({
        count: res.message.Messages.length
      });
    }
  }

  componentDidMount() {
    this.refetch();
  }

  componentWillUnmount() {
    removeTimeout();
  }

  render() {
    return (
      <Wrapper>
        <Icon name="bell" size="big" />
        {!!this.state.count && (
          <Label color="red" floating circular>
            {this.state.count}
          </Label>
        )}
      </Wrapper>
    );
  }
}

export default connect(state => ({
  newBirdRequestResultNotifications: state.newBirdRequestResultNotifications
}))(Messageinbox);
