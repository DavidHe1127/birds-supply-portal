const getTypeExtFromMime = mime => {
  const [type, ext] = mime.split('/');
  return {
    type,
    ext
  };
};

export default getTypeExtFromMime;
