import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

import auth from './auth';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch('http://127.0.0.1:4000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.get('accessToken').jwtToken}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(res => res.json()).then(json => {
    // console.log(json);
    if (json.errors) {
      return {
        data: {
          viewer: null,
          errors: {
            message: json.errors[0].message
          }
        }
      };
    }

    return json;
  });
});

const environment = new Environment({
  network,
  store
});

export default environment;
