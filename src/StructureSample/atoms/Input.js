//Input => place to write some text
import React from "react";

function Input({ classInput, placeholder }) {
  return (
    <>
      <input className={classInput} placeholder={placeholder} type="text" />
    </>
  );
}

export default Input;
