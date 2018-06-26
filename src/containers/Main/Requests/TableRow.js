import React from 'react';
import {Table, Label, Button} from 'semantic-ui-react';
import {createFragmentContainer, graphql} from 'react-relay';
import rejectRequestMutation from 'mutations/rejectRequestMutation';
import approveRequestMutation from 'mutations/approveRequestMutation';
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
    reason: null
  }

  onApproveClick = e => {
    approveRequestMutation({
      id: this.props.request.id,
    }, this.onApproved);
  }

  onRejectClick = e => {
    this.setState({
      showReasonInput: true
    });
  }

  onApproved = e => {
    newBirdRequest.pushResult({
      status: 'approved',
      reason: '',
    });
  }

  onRejected = e => {
    newBirdRequest.pushResult({
      status: 'rejected',
      reason: this.state.reason
    });
  }

  onReasonInputDone = e => {
    this.setState({
      showReasonInput: false
    });
    rejectRequestMutation(
      {
        id: this.props.request.id,
        reason: this.state.reason
      },
      this.onRejected,
    );
  }

  onReasonChange = (e, data) => {
    this.setState({
      reason: data.value
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
        {this.state.showReasonInput && <NewBirdRequestActionReason onDone={this.onReasonInputDone} onChange={this.onReasonChange} />}
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
