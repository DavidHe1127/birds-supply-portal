import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation MarkReadNotificationMutation($input: MarkReadNotificationData!) {
    markReadNotification(data: $input) {
      notification {
        seenState
      }
    }
  }
`;

function markNotificationAsRead(environment, source, storyID) {
  const variables = {
    input: {
      source,
      storyID
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    onError: err => console.error(err)
  });
}

export default markNotificationAsRead;

