import React from 'react';
import {Icon, Label} from 'semantic-ui-react';
import styled from 'styled-components';
import { poll, removeTimeout } from 'utils/network';

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

// poll(function() {
//   return 'xxx';
// }, 2000, 2000);

class Messageinbox extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.refetch = poll(newBirdRequest.get, this.onc);

  }

  onc = res => {
    console.log(res);
  }

  async componentDidMount() {
    this.refetch();
    // if (msg.message.Messages) {
    //   this.setState({
    //     count: msg.message.Messages.length
    //   });
    // }
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

export default Messageinbox;
