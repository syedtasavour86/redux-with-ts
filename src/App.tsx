import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Counter  from './components/Count';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decreaseCount = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className="App">
      <Counter/>
      <button onClick={increaseCount}>
        Increase Count
      </button>
      <h2>
        Welcome to React Redux with TypeScript!
      </h2>
      <button onClick={decreaseCount}>
        Decrease Count
      </button>
    </div>
  );
}

export default App;
