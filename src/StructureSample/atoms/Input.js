//Input => place to write some text
import React from "react";

function Input({ placeholder, onClickHandler }) {
  return (
    <>
      <input type="text" placeholder={placeholder} onClick={onClickHandler} />
    </>
  );
}

export default Input;
