import React from "react";
import {
  NavWrapper,
  StyledNavLink,
} from "../../StyledComponents/StyledStartPage";

const StartPageNav = () => {
  return (
    <NavWrapper>
      <StyledNavLink to="/signin">sign in</StyledNavLink>
      <StyledNavLink to="/signup">sign up</StyledNavLink>
    </NavWrapper>
  );
};

export default StartPageNav;
