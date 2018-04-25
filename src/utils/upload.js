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

export default upload;
