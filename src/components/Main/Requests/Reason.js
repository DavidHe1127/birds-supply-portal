import React, { Component } from 'react';
import { Button, Header, Icon, Modal, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';

const WithMinWidthHeight = styled(TextArea)`
  min-height: 300px;
  min-width: 600px;
  font-size: 20px;
`;


export default class NewBirdRequestActionReason extends Component {
  render() {
    return (
      <Modal
        open
        basic
        size='small'
      >
        <Header content='Give a reason for your action' />
        <Modal.Content>
          <WithMinWidthHeight placeholder='Keep your reason under 100 words' autoHeight />
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.props.onDone} inverted>Done</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
