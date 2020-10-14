//Input => place to write some text
import React from "react";

function Input({ classInput, placeholder }) {
  return (
    <>
      <input type="text" className={classInput} placeholder={placeholder} />
    </>
  );
}

export default Input;
