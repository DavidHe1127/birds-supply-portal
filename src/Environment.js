import {Environment, Network, RecordSource, Store} from 'relay-runtime';

import auth from './auth';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch('http://127.0.0.1:4000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.get('accessToken').jwtToken}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then(res => {
      if (res.status === 401) {
        document.location = res.headers.get('Location');
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then(json => {
      if (json.errors) {
        json.data = Object.assign({}, json.data, {errors: json.errors});
      }
      return json;
    })
    .catch(console.error);
});

const environment = new Environment({
  network,
  store,
});

export default environment;
