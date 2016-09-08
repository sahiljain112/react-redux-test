export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const toggleTodo = (text) => {
  return {
    type: TOGGLE_TODO,
    text,
  };
};

export const deleteTodo = (text) => {
  return {
    type: DELETE_TODO,
    text,
  };
};
