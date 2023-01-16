import React, { forwardRef } from "react";

const UserInput = (ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

export default forwardRef(UserInput);
