import React from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <h3>To jest komponent logowania</h3>
      <Button text="zaloguj się" />
      <div>
        <p>Nie masz konta?</p>
        <Link to="/signup">Zarejestruj się</Link>
      </div>
    </div>
  );
}

export default SignIn;
