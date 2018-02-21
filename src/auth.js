const get = () => JSON.parse(localStorage.getItem('AUTH'));

const set = currLoginSession => {
  localStorage.setItem('AUTH', JSON.stringify(currLoginSession));
  cache = null;
};

const keys = [
  'accessToken',
  'idToken',
  'refreshToken'
];

let cache = null;

const auth = {
  get: k => {
    if (!cache) {
      cache = get();
    }

    const key = keys.find(x => x === k);

    if (!key) {
      throw new Error(`key needs to be one of ${keys.join(',')}`);
    }

    return cache[key];
  },

  set: session => set(session),

  purge: () => set('AUTH', '')
};

export default auth;
