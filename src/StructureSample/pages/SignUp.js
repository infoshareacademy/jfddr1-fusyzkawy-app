import React, { useState } from "react";
import {
  SignWrapper,
  SignTitle,
  SignInput,
  SignButton,
  SignFooter,
  StyledLink,
} from "../../StyledComponents/StyledSign";
import { authSignUp } from "../../Firebase/auth/Auth";

const SignUp = () => {
  const emptyUserData = {
    nick: "",
    email: "",
    password: "",
    image: "",
  };
  const [userData, setUserData] = useState(emptyUserData);

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    authSignUp(userData.email, userData.password);
    setUserData(emptyUserData);
  };
  return (
    <SignWrapper onSubmit={event => handleSubmit(event)}>
      <SignTitle>sign up</SignTitle>
      <SignInput
        type="text"
        name="nick"
        placeholder="nick"
        value={userData.nick}
        onChange={event => handleChange(event)}
      ></SignInput>
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
      <SignInput
        type="file"
        name="image"
        placeholder="image"
        value={userData.image}
        onChange={event => handleChange(event)}
      ></SignInput>
      <SignButton type="submit" name="submit">
        sign up
      </SignButton>
      <SignFooter>
        <p>Already have an account yet?</p>
        <StyledLink to="/signin">sign in</StyledLink>
      </SignFooter>
    </SignWrapper>
  );
};

export default SignUp;
