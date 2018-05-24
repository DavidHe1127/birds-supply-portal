import {graphql} from 'relay-runtime';

const ifParrotExist = `
  query ifParrotExist($code: code!) {
    ifParrotExist(code: $code)
  }
`;

export {
  ifParrotExist: graphql`${ifParrotExist}`
};