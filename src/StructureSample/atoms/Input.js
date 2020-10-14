//Input => place to write some text
import React from "react";

function Input({ placeholder }) {
  return (
    <>
      <input type="text" placeholder={placeholder} />
    </>
  );
}

export default Input;
