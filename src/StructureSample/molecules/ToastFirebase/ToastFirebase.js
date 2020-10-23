import React from "react";
import { Toast } from "./ToastFirebaseStyled";

const ToastFirebase = ({ active, text, show, success }) => {
  return (
    <>
      <Toast active={active} show={show} success={success}>
        {text}
      </Toast>
    </>
  );
};

export default ToastFirebase;
