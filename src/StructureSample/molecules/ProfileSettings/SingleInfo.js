import React from "react";
import { Input, Label } from "./ProfileSettingsStyled";

const SingleInfo = ({ name, type, placeholder, value, handleChange }) => {
  return (
    <>
      <Label htmlFor={name}>{placeholder}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event => handleChange(event)}
      />
    </>
  );
};

export default SingleInfo;
