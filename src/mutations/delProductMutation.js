import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from 'Environment';

const mutation = graphql`
  mutation delProductMutation($input: delProductInput!) {
    delProduct(input: $input) {
      deletedProductId
    }
  }
`;

const delProductMutation = (id, viewerId, cb) => {
  const variables = {
    input: {
      id
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (res, err) => {
      cb && cb();
    },
    updater: store => {
      const deleteProductField = store.getRootField('delProduct');
      const deletedId = deleteProductField.getValue('deletedProductId');
      const userProxy = store.get(viewerId);
      const connection = ConnectionHandler.getConnection(
        userProxy,
        'Products_products'
      );
      ConnectionHandler.deleteNode(connection, deletedId);
    },
    onError: err => console.log(err)
  });
};

export default delProductMutation;
