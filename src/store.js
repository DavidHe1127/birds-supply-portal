import { initStore } from 'react-waterfall';

const store = {
  initialState: { loading: false },
  actions: {
    startLoading: ({ loading }) => ({ loading: true }),
    stopLoading: ({ loading }) => ({ loading: false })
  }
};

export const {
  Provider,
  Consumer,
} = initStore(store);
