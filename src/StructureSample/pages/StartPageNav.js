import React from "react";
import { NavWrapper, StyledNavLink } from "./StartPage/StartPageStyled";

const StartPageNav = () => {
  return (
    <NavWrapper>
      <StyledNavLink to="/jfddr1-fusyzkawy-app/signin/">sign in</StyledNavLink>
      <StyledNavLink to="/jfddr1-fusyzkawy-app/signup/">sign up</StyledNavLink>
    </NavWrapper>
  );
};

export default StartPageNav;
