let b1 = null;
let b2 = null;

const init = (base, bucket) => {
  b1 = base;
  b2 = bucket;
};

const buildUrl = {
  upload: ({name, ext}) => `${b1}/${b2}/${name}.${ext}`,
  imageProcessor: ({url, queries}) => {
    const q = Object.entries(queries)
      .map(x => {
        const [k, v] = x;
        return `${k}=${v}`;
      })
      .join('&');

    return `${url}?${q}`;
  },
};

export { init };

export default buildUrl;
