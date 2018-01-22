import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation setProductMutation($input: setProductInput!) {
    setProduct(input: $input) {
      product {
        id
        price
        qty
      }
    }
  }
`;

const setProductMutation = ({ id, price, qty }, cb) => {
  const variables = {
    input: {
      id,
      qty,
      price
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

export default setProductMutation;
