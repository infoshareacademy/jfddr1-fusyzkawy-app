import React from "react";
import Button from "./Button";

const style = {
  backgroundColor: "red",
};

function SignIn({ username, password }) {
  return (
    <div>
      To jest komponent logowania
      <p>{username}</p>
      <p>{password}</p>
      <Button
        text="zaloguj się"
        onClickHandler={() => console.log("zaloguj się")}
        style={style}
        buttonName="Awesome"
      />
    </div>
  );
}

export default SignIn;
