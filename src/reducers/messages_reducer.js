import { fetchMessages } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      return action.payload.messages
    }
    case 'SELECT_CHANNEL': {
      return [];
    }
    case 'CREATE_MESSAGE': {
      let newState = state.slice(0)
      newState.push(action.payload);
      return newState
    }
    default:
      return state;
  }
}
