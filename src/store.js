import {initStore} from 'react-waterfall';

const store = {
  initialState: {loading: false},
  actions: {
    toggleLoading: ({loading}, newState) => newState,
  },
};

export const {Provider, Consumer, actions} = initStore(store);
