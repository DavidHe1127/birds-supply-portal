import { fetchQuery } from 'relay-runtime';

import environment from 'Environment';

const query = (q, variables) => import(`./${q}`).then(module => {
  return fetchQuery(environment, module.default, variables);
});

export default query;