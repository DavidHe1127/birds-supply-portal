const get = () => JSON.parse(localStorage.getItem('AUTH'));

const set = currLoginSession => {
  localStorage.setItem('AUTH', JSON.stringify(currLoginSession));
  cache = null;
};

const cache = null;

const auth = {
  get: key => {
    if (!cache) {
      cache = get();
    }

    return cache[key];
  },

  set: session => set(session),

  purge: () => set('AUTH', ''),
};

export default auth;
