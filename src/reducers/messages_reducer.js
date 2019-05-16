export default function(state = null, action) {
  switch (action.type) {
    case 'CREATE_MESSAGE': {
      let newState = state.slice(0)
      newState.push(action.payload);
      return newState
    }
    default:
      return state;
  }
}
