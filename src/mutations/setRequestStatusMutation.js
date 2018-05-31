import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation setRequestStatusMutation($input: setRequestStatusInput!) {
    setRequestStatus(input: $input) {
      request {
        id
        status
      }
    }
  }
`;

const getOptimisticResponse = (id, status) => ({
  setRequestStatus: {
    request: {
      id,
      status,
    },
  },
});

const setRequestStatusMutation = ({ id, status }, cb) => {
  const variables = {
    input: {
      id,
      status
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    optimisticResponse: getOptimisticResponse(id, status),
    onCompleted: (res, err) => {
      cb && cb();
    },
    onError: err => alert(err, 'Not allowed')
  });
};

export default setRequestStatusMutation;
