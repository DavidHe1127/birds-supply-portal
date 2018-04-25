import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation addProductMutation($input: addProductInput!) {
    addProduct(input: $input) {
      product {
        id
      }
    }
  }
`;

const addProductMutation = ({ price, parrot, qty, avatarUrl }, cb) => {
  const variables = {
    input: {
      price,
      parrotCode: parrot,
      qty,
      avatarUrl
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

export default addProductMutation;
