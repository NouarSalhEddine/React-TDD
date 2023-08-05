// Addition.js
import React, { useState } from 'react';

const Addition = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const sum = Number(number1) + Number(number2);
    setResult(`Result: ${sum}`);
  };

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        aria-label="Number 1"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        aria-label="Number 2"
      />
      <button onClick={handleAdd}>Add</button>
      <p>{result}</p>
    </div>
  );
};

export default Addition;
