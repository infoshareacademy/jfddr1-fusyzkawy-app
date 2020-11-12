import React from "react";
import { EmailInput, Label } from "./ProfileSettingsStyled";

const EmailInfo = ({ type, placeholder, value }) => {
  return (
    <>
      <Label htmlFor={type}>{placeholder}</Label>
      <EmailInput
        name={type}
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly
      />
    </>
  );
};

export default EmailInfo;
