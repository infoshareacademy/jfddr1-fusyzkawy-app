import React from "react";

function Input({
  title,
  type,
  isRequired,
  value,
  placeholder,
  style,
  labelStyle,
  defaultValue,
  readOnly,
}) {
  return (
    <div>
      <label htmlFor={title} style={labelStyle}>
        {" "}
        {title}
      </label>
      <input
        type={type}
        id={title}
        name={title}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        style={style}
        readOnly={readOnly}
      ></input>
    </div>
  );
}

export default Input;
