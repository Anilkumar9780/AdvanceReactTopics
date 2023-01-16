import React, { useRef } from "react";

import UserInput from "./UserInput";

export const App = () => {
  const inputRef = useRef();

  const updateInput = () => {
    inputRef.current.value = "Anil kumar"
    inputRef.current.style.color = 'red'
  };

  return (
    <div>
      <h4>ForwardRef</h4>
      <UserInput ref={inputRef} />
      <button className="btn btn-outline-primary" onClick={updateInput}>UpdateInput</button>
    </div>
  );
};
