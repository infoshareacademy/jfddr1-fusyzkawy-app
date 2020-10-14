import React from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <h3>To jest komponent rejestracji</h3>
      <Button text="zarejestruj się" />
      <div>
        <p>Masz konto?</p>
        <Link to="/signin">Zaloguj się</Link>
      </div>
    </div>
  );
}

export default SignUp;
