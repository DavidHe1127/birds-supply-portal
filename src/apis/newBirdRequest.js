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

function make(feedback) {
  fetch(`${process.env.REACT_APP_NEW_BIRD_REQUEST_API}/new-bird-request`, {
    headers: {
      Authorization: `${auth.get('idToken').jwtToken}`,
    },
    method: 'POST',
    body: JSON.stringify({
      note: feedback
    })
  }).then(res => res.json());
}

const newBirdRequest = {
  get,
  make
};

export default newBirdRequest;
