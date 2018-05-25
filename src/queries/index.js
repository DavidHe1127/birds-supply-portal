import { fetchQuery } from 'relay-runtime';

import environment from 'Environment';

const query = (q, variables) => import(`./${q}`).then(module => fetchQuery(environment, module.default, variables));

export default query;