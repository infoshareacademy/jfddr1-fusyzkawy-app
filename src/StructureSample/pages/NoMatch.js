import React from "react";
import { SignWrapper } from "../../StyledComponents/StyledSign";
import StyledNoMatch from "../../StyledComponents/StyledNoMatch";

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
