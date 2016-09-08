
// Just a sample reducer. Does not change state
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, visibilityFilters } from '../actions/action.js';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return ( ...state.todos , {
        
      }
    );
    case TOGGLE_TODO:
    case DELETE_TODO:
    default:
        return state;
  }
}
