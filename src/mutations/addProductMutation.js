import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation addProductMutation($input: addProductInput!) {
    addProduct(input: $input) {
      id
    }
  }
`;

const addProductMutation = ({ price, parrot, qty }, cb) => {
  const variables = {
    input: {
      price,
      parrotCode: parrot,
      qty
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (res, err) => {
      cb && cb();
    },
    onError: err => alert(err, 'fuck off!!!')
  });
};

export default addProductMutation;
