import React, { useState } from "react";
import UserInformation from "../molecules/UserInformation";
import {
  MainNavBar,
  NavAddTaskBtn,
  LinksWrapper,
  MainNavLink,
} from "../../StyledComponents/StyledNav";

const Nav = () => {
  const [activeAddTaskForm, setActiveAddTaskForm] = useState(false);

  return (
    <>
      <MainNavBar>
        <NavAddTaskBtn
          onClick={event => {
            event.preventDefault();
            !activeAddTaskForm && setActiveAddTaskForm(true);
          }}
          onKeyDown={event => {
            event.key === "Escape" && setActiveAddTaskForm(false);
          }}
        >
          Add Task
        </NavAddTaskBtn>
        <LinksWrapper>
          <MainNavLink
            activeClassName="activeMainNavLink"
            to="/jfddr1-fusyzkawy-app/tasks"
          >
            Tasks
          </MainNavLink>
          <MainNavLink
            activeClassName="activeMainNavLink"
            to="/jfddr1-fusyzkawy-app/timer/current"
          >
            Timer
          </MainNavLink>
          <MainNavLink
            activeClassName="activeMainNavLink"
            to="/jfddr1-fusyzkawy-app/calendar"
          >
            Calendar
          </MainNavLink>
          <MainNavLink
            activeClassName="activeMainNavLink"
            to="/jfddr1-fusyzkawy-app/users"
          >
            Users
          </MainNavLink>
        </LinksWrapper>
        <UserInformation />
      </MainNavBar>
      <form style={{ display: `${!activeAddTaskForm ? "none" : "flex"}` }}>
        <p>Add Task Form</p>
      </form>
    </>
  );
};

export default Nav;
