import {graphql} from 'relay-runtime';

export default graphql`
  query ifParrotExistQuery($code: String!) {
    ifParrotExist(code: $code)
  }
`;
