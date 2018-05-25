import React from 'react';

import Requests from 'components/Main/Requests';

import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

// import { Confirm, Container } from 'semantic-ui-react';
// import { withRouter } from 'react-router-dom';

// import delProductMutation from 'mutations/delProductMutation';
// import Products from 'components/Main/Products';
// import Header from 'components/Main/Products/Header';

const allRequests = graphql`
  query RequestsContainerQuery {
    viewer {
      id
      ...Requests_viewer
    }
    errors {
      id
      message
      data {
        type
      }
    }
  }
`;

const render = ({error, props}) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props && props.viewer) {
    return <Requests viewer={props.viewer} />
  }
  return <div>Loading</div>;
};

export default class RequestsIndexContainer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={allRequests}
        render={render}
      />
    );
  }
}
