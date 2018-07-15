import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation rejectRequestMutation($input: rejectRequestInput!) {
    rejectRequest(input: $input) {
      request {
        id
        status
        reason
      }
    }
  }
`;

const getOptimisticResponse = (id, reason) => ({
  rejectRequest: {
    id,
    status: 'rejected',
    reason
  },
});

const rejectRequestMutation = ({ id, reason }, cb) => {
  const variables = {
    input: {
      id,
      reason
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    optimisticResponse: getOptimisticResponse(id, reason),
    onCompleted: (res, err) => {
      cb && cb();
    },
    onError: err => alert(err, 'Not allowed')
  });
};

export default rejectRequestMutation;
