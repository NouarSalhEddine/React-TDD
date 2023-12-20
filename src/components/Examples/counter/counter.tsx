import React from 'react';

interface CounterProps {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

const Counter: React.FC<CounterProps> = ({ count ,handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
