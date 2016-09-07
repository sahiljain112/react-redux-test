// Action types
export const TASK1 = 'SAMPLE_TASK1';
export const TASK2 = 'SAMPLE_TASK2';

// Action creators
export const action1 = () => {
  return {
    type: TASK1,
    text: 'This is sample task 1'
  }
}

export const action2 = () => {
  return {
    type: TASK2,
    text: 'This is sample task 2'
  }
}
