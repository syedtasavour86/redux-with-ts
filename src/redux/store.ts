// src/redux/store.ts
import { createStore } from 'redux';

// Define allowed action types
type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

// Reducer with initial state and action
const counterReducer = (state: number = 0, action: CounterAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Create store directly with reducer
export const Store = createStore(counterReducer);
