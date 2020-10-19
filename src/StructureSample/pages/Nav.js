import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navHome">
      <NavLink className="navIcon" to="/jfddr1-fusyzkawy-app/">
        Tasks
      </NavLink>
      <NavLink className="navIcon" to="/jfddr1-fusyzkawy-app/timer/">
        Timer
      </NavLink>
      <NavLink className="navIcon" to="/jfddr1-fusyzkawy-app/calendar/">
        Calendar
      </NavLink>
      <NavLink className="navIcon" to="/jfddr1-fusyzkawy-app/users">
        Users
      </NavLink>
    </div>
  );
};

export default Nav;
