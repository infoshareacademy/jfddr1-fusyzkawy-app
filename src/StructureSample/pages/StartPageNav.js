import React from "react";
import { NavLink } from "react-router-dom";

const StartPageNav = () => {
  return (
    <nav>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  );
};

export default StartPageNav;
