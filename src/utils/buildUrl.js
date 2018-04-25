let b1 = null;
let b2 = null;

const init = (base, bucket) => {
  b1 = base;
  b2 = bucket;
};

const buildUrl = {
  upload: ({ name, ext }) => `${b1}/${b2}/${name}.${ext}`,
  download: name => `https://s3-us-east-2.amazonaws.com/${b2}/${name}`
};

export { init };

export default buildUrl;
