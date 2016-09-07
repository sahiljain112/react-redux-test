// Very basic setup for store.
import { createStore } from 'redux';
import { reducers } from './reducers/reducer.js';

const store = createStore(reducers);
console.log(store.getState());
