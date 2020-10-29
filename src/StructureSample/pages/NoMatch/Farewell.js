import React from "react";
import { SignWrapper } from "../SignPage/SignStyled";
import StyledNoMatch from "./NoMatchStyled";

const Farewell = () => {
  return (
    <SignWrapper>
      <StyledNoMatch>
        <p>Thanks for dropping by, see You soon.</p>
      </StyledNoMatch>
    </SignWrapper>
  );
};

export default Farewell;
