let b1 = null;
let b2 = null;

const init = (base, bucket) => {
  b1 = base;
  b2 = bucket;
};

const buildFileUploadUrl = ({name, type}) => {
  const [t, e] = type.split('/'); // eslint-disable-line no-unused-vars
  return `${b1}/${b2}/${name}.${e}`;
};

export { init };

export default buildFileUploadUrl;
