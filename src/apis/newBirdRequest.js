import auth from 'auth';

function* get() {
  while (true) {
    yield fetch(`${process.env.REACT_APP_NEW_BIRD_REQUEST_API}/new-bird-requests`, {
      headers: {
        Authorization: `${auth.get('idToken').jwtToken}`,
      }
    }).then(res => res.json());
  }
}

function pushResult({status, reason}) {
  fetch(`${process.env.REACT_APP_NEW_BIRD_REQUEST_API}/new-bird-request`, {
    headers: {
      Authorization: `${auth.get('idToken').jwtToken}`,
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      payload: {
        status,
        reason
      }
    })
  }).then(res => res.json());
}

const newBirdRequest = {
  get,
  pushResult
};

export default newBirdRequest;
