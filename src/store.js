import {initStore} from 'react-waterfall';

const store = {
  initialState: {loading: false, newBirdRequestResultNotifications: []},
  actions: {
    toggleLoading: ({loading}, newState) => newState,
    updateNewBirdRequestResultNotifications: ({newBirdRequestResultNotifications}, newState) => {
      const existingMessageIds = newBirdRequestResultNotifications.map(x => x.MessageId);
      const newMessages = newState.newBirdRequestResultNotifications.filter(x => !existingMessageIds.includes(x.id));

      return {
        newBirdRequestResultNotifications: [...newBirdRequestResultNotifications, ...newMessages]
      };
    }
  },
};

export const {Provider, Consumer, actions, connect} = initStore(store);
