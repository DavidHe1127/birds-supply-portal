import auth from 'auth';

const newBirdRequest = {

  get: () => fetch(`${process.env.REACT_APP_NEW_BIRD_REQUEST_API}/new-bird-requests`, {
      headers: {
        Authorization: `${auth.get('idToken').jwtToken}`,
      }
    }).then(res => res.json())
};

export default newBirdRequest;
