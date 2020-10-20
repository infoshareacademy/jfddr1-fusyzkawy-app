//Input => place to write some text
import React from "react";
import styled from "styled-components";

export const NewInput = styled(Input)`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

function Input({
  title,
  type,
  isRequired,
  value,
  placeholder,
  style,
  labelStyle,
  defaultValue,
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
      ></input>
    </div>
  );
}

export default Input;
