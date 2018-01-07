import { commitMutation, graphql } from 'react-relay';
import environment from 'Environment';

const mutation = graphql`
  mutation delProductMutation($input: delProductInput!) {
    delProduct(input: $input) {
      deletedProductId
    }
  }
`;

const configs = [
  {
    type: 'NODE_DELETE',
    deletedIDFieldName: 'deletedProductId'
  }
];

const delProductMutation = (id, cb) => {
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
      // const payload = store.getRootField('removeTodo');
      // sharedUpdater(store, user, payload.getValue('deletedTodoId'));
    },
    onError: err => alert(err, 'fuck off!!!'),
    configs
  });
};

export default delProductMutation;
