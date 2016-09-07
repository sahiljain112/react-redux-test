
// Just a sample reducer. Does not change state
const sample = (state = initialState, action) => {
  switch (action.type) {
    case 'SAMPLE_TASK1':
        return action.text
    default:
      return state

  }
}
