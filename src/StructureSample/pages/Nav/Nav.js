import React, { useState } from "react";
import UserInformation from "../../molecules/UserInformation/UserInformation";
import {
  MainNavBar,
  NavAddTaskBtn,
  LinksWrapper,
  MainNavLink,
} from "./NavStyled";
import AddTaskForm from "../../molecules/AddTaskForm/AddTaskForm";
import DropDownMenu from "../../molecules/UserInformation/DropDownMenu/DropDownMenu";

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
        <MainNavLink activeClassName="activeMainNavLink" to="/tasks/">
          Tasks
        </MainNavLink>
        <MainNavLink activeClassName="activeMainNavLink" to="/timer/">
          Timer
        </MainNavLink>
        <MainNavLink activeClassName="activeMainNavLink" to="/calendar/">
          Calendar
        </MainNavLink>
        {/* <MainNavLink
          activeClassName="activeMainNavLink"
          to="/jfddr1-fusyzkawy-app/users/"
        >
          Users
        </MainNavLink> */}
      </LinksWrapper>
      <UserInformation>
        <DropDownMenu />
      </UserInformation>
      {activeAddTaskForm === true ? (
        <AddTaskForm closeModal={value => setActiveAddTaskForm(value)} />
      ) : null}
    </MainNavBar>
  );
};

export default Nav;
