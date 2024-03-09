import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const minusButton = () => {
    setCount(count - 1);
  };

  const plusButton = () => {
    // SET COUNT FOR THE
    //setCount(count + 1);

    // UPDATER FUNCTION
    // set count which is the previous count not take all the current count
    setCount((count) => count + 1);
    setCount((count) => count + 1);
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
