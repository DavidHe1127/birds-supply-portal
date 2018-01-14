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

// const configs = [
//   {
//     type: 'NODE_DELETE',
//     deletedIDFieldName: 'deletedProductId'
//   }
// ];

const delProductMutation = (id, queryId, cb) => {
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
      const viewerProxy = store.get('client:root');
      console.log(viewerProxy);
      // const connection = ConnectionHandler.getConnection(viewerProxy, 'Products_products')
      // ConnectionHandler.deleteNode(connection, deletedId)
    },
    onError: err => console.log(err),
  });
};

    // configs
export default delProductMutation;
