import React, { forwardRef } from "react";

const UserInput = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

export default forwardRef(UserInput);
