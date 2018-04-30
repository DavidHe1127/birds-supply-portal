const upload = ({ url, file, token }) => {
  return fetch(url, {
    headers: {
      'Content-Type': file.type,
      authorization: token
    },
    method: 'PUT',
    body: file
  });
};

const fetchImage = url => fetch(url);

export { upload, fetchImage };
