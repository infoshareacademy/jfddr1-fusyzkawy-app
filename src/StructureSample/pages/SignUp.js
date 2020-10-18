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
      <SignTitle>sign up</SignTitle>
      <SignInput type="text" name="nick" placeholder="nick"></SignInput>
      <SignInput type="text" name="email" placeholder="email"></SignInput>
      <SignInput
        type="password"
        name="email"
        placeholder="password"
      ></SignInput>
      <SignInput type="file" name="email" placeholder="image"></SignInput>
      <SignButton type="submit">sign up</SignButton>
      <SignFooter>
        <p>Already have an account yet?</p>
        <StyledLink to="/signin">sign in</StyledLink>
      </SignFooter>
    </SignWrapper>
  );
};

export default SignIn;
