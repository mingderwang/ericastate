// Counter.tsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;