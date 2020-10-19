import React, { useState } from "react";
import {
  SignWrapper,
  SignTitle,
  SignInput,
  SignButton,
  SignFooter,
  StyledLink,
} from "../../StyledComponents/StyledSign";
import { authSignIn } from "../../Firebase/auth/Auth";

const SignIn = () => {
  const emptyUserData = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(emptyUserData);

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    authSignIn(userData.email, userData.password);
    setUserData(emptyUserData);
  };
  return (
    <SignWrapper onSubmit={event => handleSubmit(event)}>
      <SignTitle>sign in</SignTitle>
      <SignInput
        type="text"
        name="email"
        placeholder="email"
        value={userData.email}
        onChange={event => handleChange(event)}
      ></SignInput>
      <SignInput
        type="password"
        name="password"
        placeholder="password"
        value={userData.password}
        onChange={event => handleChange(event)}
      ></SignInput>
      <SignButton type="submit">sign in</SignButton>
      <SignFooter>
        <p>Don't have an account yet?</p>
        <StyledLink to="/signup">sign up</StyledLink>
      </SignFooter>
    </SignWrapper>
  );
};

export default SignIn;
