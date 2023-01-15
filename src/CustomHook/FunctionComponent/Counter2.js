import React from "react";

//costom hook
import { useCounter } from "./useCounter";

export const Counter2 = () => {
  const [count, handleDncrement, handleIncrement] = useCounter();
  return (
    <div>
      <h3>Counter2</h3>
      <div>{count}</div>
      <button onClick={handleDncrement}>Dncrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
};