//Radio input
import React from "react";

function RadioInput({ text, style, isChecked }) {
  return (
    <div style={style}>
      <label for={text}>{text}</label>
      <input type="radio" id={text} value={text} checked={isChecked} />
    </div>
  );
}

export default RadioInput;
