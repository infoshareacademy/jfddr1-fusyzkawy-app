import React, { useState } from "react";
import UserInformation from "../molecules/UserInformation";
import {
  MainNavBar,
  NavAddTaskBtn,
  LinksWrapper,
  MainNavLink,
} from "../../StyledComponents/StyledNav";
import AddTaskForm from "../molecules/AddTaskForm";

const Nav = () => {
  const [activeAddTaskForm, setActiveAddTaskForm] = useState(false);

  return (
    <MainNavBar>
      <NavAddTaskBtn
        onClick={event => {
          event.preventDefault();
          !activeAddTaskForm && setActiveAddTaskForm(true);
        }}
      >
        Add Task
      </NavAddTaskBtn>
      <LinksWrapper>
        <MainNavLink
          activeClassName="activeMainNavLink"
          to="/jfddr1-fusyzkawy-app/tasks/"
        >
          Tasks
        </MainNavLink>
        <MainNavLink
          activeClassName="activeMainNavLink"
          to="/jfddr1-fusyzkawy-app/timer/current/"
        >
          Timer
        </MainNavLink>
        <MainNavLink
          activeClassName="activeMainNavLink"
          to="/jfddr1-fusyzkawy-app/calendar/"
        >
          Calendar
        </MainNavLink>
        <MainNavLink
          activeClassName="activeMainNavLink"
          to="/jfddr1-fusyzkawy-app/users/"
        >
          Users
        </MainNavLink>
      </LinksWrapper>
      <UserInformation />
      <AddTaskForm
        opacity={!activeAddTaskForm ? "0" : "100%"}
        pointerEvents={!activeAddTaskForm ? "none" : "initial"}
        closeModal={value => setActiveAddTaskForm(value)}
      />
    </MainNavBar>
  );
};

export default Nav;
