import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navHome">
      <NavLink className="navIcon" to="/">
        Tasks
      </NavLink>
      <NavLink className="navIcon" to="/timer">
        Timer
      </NavLink>
      <NavLink className="navIcon" to="/calendar">
        Calendar
      </NavLink>
      <NavLink className="navIcon" to="/users">
        Users
      </NavLink>
    </div>
  );
};

export default Nav;
