import React, { useState } from "react";
import UserInformation from "../molecules/UserInformation";
import {
  MainNavBar,
  NavAddTaskBtn,
  LinksWrapper,
  MainNavLink,
} from "../../StyledComponents/StyledNav";

const linkNames = ["Tasks", "Timer", "Calendar", "Users"];

const Nav = () => {
  const [activeMainNavLink, setActiveMainNavLink] = useState(linkNames[0]);
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
          {linkNames.map(linkName => {
            return (
              <MainNavLink
                key={linkName}
                to={linkName === linkNames[0] ? "/" : `${linkName}`}
                background={
                  activeMainNavLink === linkName
                    ? "var(--extra-dark-gray)"
                    : undefined
                }
                onClick={() => setActiveMainNavLink(linkName)}
              >
                {linkName}
              </MainNavLink>
            );
          })}
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
