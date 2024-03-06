import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const minusButton = () => {
    setCount(count - 1);
  };

  const plusButton = () => {
    setCount(count + 1);
  };

  const resetButton = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={minusButton}>-</button>
        <button onClick={resetButton}>Reset</button>
        <button onClick={plusButton}>+</button>
      </div>
    </div>
  );
}

export default Count;
