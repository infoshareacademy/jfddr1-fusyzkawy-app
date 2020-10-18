import React from "react";
import {
  SignWrapper,
  SignTitle,
  SignInput,
  SignButton,
  SignFooter,
  StyledLink,
} from "../../StyledComponents/StyledSign";

const SignIn = () => {
  return (
    <SignWrapper>
      <SignTitle>sign in</SignTitle>
      <SignInput type="text" name="email" placeholder="email"></SignInput>
      <SignInput
        type="password"
        name="email"
        placeholder="password"
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
