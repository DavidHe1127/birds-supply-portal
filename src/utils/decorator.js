import auth from '../auth';

const withAuth = operation => {
  const token = auth.get('idToken').jwtToken;
  return props => operation(Object.assign({}, props, {token}));
};

export { withAuth };
