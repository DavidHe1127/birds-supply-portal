import React from 'react';
import {Icon, Label} from 'semantic-ui-react';
import styled from 'styled-components';

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
  state = {
    count: 0,
  }

  async componentDidMount() {
    const msg = await newBirdRequest.get();

    if (msg.message.Messages) {
      this.setState({
        count: msg.message.Messages.length
      });
    }
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

export default Messageinbox;
