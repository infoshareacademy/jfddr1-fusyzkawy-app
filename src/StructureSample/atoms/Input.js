//Input => place to write some text
import React from "react";

function Input({ title, type, isRequired, value }) {
  return (
    <div className="displayFlexColumn">
      <label className="labelUserSettings" htmlFor={title}>
        {" "}
        {title}{" "}
      </label>
      <input
        type={type}
        id={title}
        name={title}
        // {isRequired ? "required" : ""}
        value={value}
      ></input>
    </div>
  );
}

export default Input;
