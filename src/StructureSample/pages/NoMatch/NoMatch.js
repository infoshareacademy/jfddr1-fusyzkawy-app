import React from "react";
import { SignWrapper } from "../SignPage/SignStyled";
import StyledNoMatch from "./NoMatchStyled";

const NoMatch = () => {
  return (
    <SignWrapper>
      <StyledNoMatch>
        <p>Please enter a valid URL.</p>
      </StyledNoMatch>
    </SignWrapper>
  );
};

export default NoMatch;
