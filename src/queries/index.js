import { fetchQuery } from 'relay-runtime';

import environment from 'Environment';

// eager will enforce webpack to include file chunk in the parent chunk without creating a separate one
// as a result, no additional request to fetch that chunk is fired off
const query = (q, variables) => import(/* webpackMode: "eager" */`./${q}`).then(module => fetchQuery(environment, module.default, variables));

export default query;
