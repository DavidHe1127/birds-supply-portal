import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation approveRequestMutation($input: approveRequestInput!) {
    approveRequest(input: $input) {
      request{
        id
        status
      }
    }
  }
`;

const getOptimisticResponse = id => ({
  approveRequest: {
    id,
    status: 'approved'
  },
});

const approveRequestMutation = ({ id }, cb) => {
  const variables = {
    input: {
      id
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    optimisticResponse: getOptimisticResponse(id),
    onCompleted: (res, err) => {
      cb && cb();
    },
    onError: err => alert(err, 'Not allowed')
  });
};

export default approveRequestMutation;
