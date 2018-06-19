import React from 'react';
import {Table, Label, Button} from 'semantic-ui-react';
import {createFragmentContainer, graphql} from 'react-relay';
import setRequestStatusMutation from 'mutations/setRequestStatusMutation';
import newBirdRequest from 'apis/newBirdRequest';
import NewBirdRequestActionReason from 'components/Main/Requests/Reason';

const STATUS_LABEL_COLOR = {
  pending: 'blue',
  rejected: 'red',
  approved: 'green',
};

class RequestTableRow extends React.Component {
  state = {
    showReasonInput: false,
  }

  onApproveClick = e => {
    this.setState({
      showReasonInput: true,
    });
    // setRequestStatusMutation({
    //   id: this.props.request.id,
    //   status: 'approved'
    // }, this.onApproved);
  }

  onRejectClick = e => {
    setRequestStatusMutation(
      {
        id: this.props.request.id,
        status: 'rejected',
      },
      this.onRejected,
    );
  }

  onApproved = e => {
    newBirdRequest.make({
      status: 'approved',
      reason: 'I love u',
    });
  }

  onRejected = e => {
    newBirdRequest.make({
      status: 'rejected',
      reason: 'I hate u',
    });
  }

  onReasonInputDone = e => {
    this.setState({
      showReasonInput: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <Table.Row>
          <Table.Cell>{this.props.request.id}</Table.Cell>
          <Table.Cell>{this.props.request.parrot}</Table.Cell>
          <Table.Cell>{this.props.request.code}</Table.Cell>
          <Table.Cell>{this.props.request.reason}</Table.Cell>
          <Table.Cell>
            <Label color={STATUS_LABEL_COLOR[this.props.request.status]}>
              {this.props.request.status.toUpperCase()}
            </Label>
          </Table.Cell>
          <Table.Cell textAlign="right">
            <Button.Group>
              <Button positive onClick={this.onApproveClick}>
                Approve
              </Button>
              <Button.Or />
              <Button negative onClick={this.onRejectClick}>
                Reject
              </Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
        {this.state.showReasonInput && <NewBirdRequestActionReason onDone={this.onReasonInputDone} />}
      </React.Fragment>
    );
  }
}

export default createFragmentContainer(
  RequestTableRow,
  graphql`
    fragment TableRow_request on Request {
      id
      parrot
      code
      reason
      status
    }
  `,
);
