import { fetchQuery } from 'relay-runtime';

import environment from 'Environment';
import {ifParrotExist} from 'utils/queries';

const query = (q, variables) => import(`${q}`).then(module => fetchQuery(environment, module.default, variables));

// fetchQuery(environment, q, variables);

export default query;