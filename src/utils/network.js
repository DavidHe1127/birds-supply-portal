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

const poll = (fn, timeout, interval) => {
  const endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;

  const checkCondition = (resolve, reject) => {
    // If the condition is met, we're done!
    var result = fn();
    if (result) {
      resolve(result);
    } else if (Number(new Date()) < endTime) {
      // If the condition isn't met but the timeout hasn't elapsed, go again
      setTimeout(checkCondition, interval, resolve, reject);
    } else {
      // Didn't match and too much time, reject!
      reject(new Error('timed out for ' + fn + ': ' + arguments));
    }
  };

  return new Promise(checkCondition);
};

export {upload, poll};
