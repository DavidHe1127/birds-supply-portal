import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation addNewParrotRequestMutation($input: addRequestInput!) {
    addRequest(input: $input) {
      request {
        id
      }
    }
  }
`;

const addNewParrotRequestMutation = ({ parrot, code, reason }, cb) => {
  const variables = {
    input: {
      parrot,
      code,
      reason
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (res, err) => {
      cb && cb();
    },
    onError: err => alert(err, 'operation failed')
  });
};

export default addNewParrotRequestMutation;
