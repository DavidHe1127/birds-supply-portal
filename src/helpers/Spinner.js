import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = ({ children }) => {
  return (
    <React.Fragment>
      <Dimmer active>
        <Loader>Please wait...</Loader>
      </Dimmer>
      {children}
    </React.Fragment>
  );
};

export default Spinner;
