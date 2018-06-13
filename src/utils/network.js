const upload = ({url, file, token}) => {
  return fetch(url, {
    headers: {
      'Content-Type': file.type,
      authorization: token,
    },
    method: 'PUT',
    body: file,
  });
};

let pollId;

const poll = (generator, callback) => {
  const g = generator();

  const x = g2 => {
    const p = g.next();
    p.value.then(res => {
      callback(res);
      pollId = setTimeout(x, 5000, g);
    });
  };

  return x;
};

const removeTimeout = () => clearTimeout(pollId);

export {upload, poll, removeTimeout};
