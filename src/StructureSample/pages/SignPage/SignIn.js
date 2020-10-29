import React, { useState, useContext } from "react";
import {
  SignWrapper,
  SignTitle,
  SignInput,
  SignButton,
  SignFooter,
  StyledLink,
} from "./SignStyled";
import { authSignIn } from "../../../Firebase/auth/auth";
import { UserData } from "../../../contexts/UserData";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const emptyUserData = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(emptyUserData);
  const { displayToast, userUid, clearToast } = useContext(UserData);
  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    clearToast();
    authSignIn(userData.email, userData.password, displayToast).then(() => {
      history.push("/jfddr1-fusyzkawy-app/tasks/");
    });
    if (userUid) {
      setUserData(emptyUserData);
    }
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
        <StyledLink to="/jfddr1-fusyzkawy-app/signup/">sign up</StyledLink>
      </SignFooter>
    </SignWrapper>
  );
};

export default SignIn;
