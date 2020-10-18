import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import UserInformation from "../molecules/UserInformation";

const MainNavBar = styled.div`
  background-color: var(--basic-navy-blue);
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

const NavAddTaskBtn = styled.button`
  background-color: var(--basic-green);
  border: none;
  border-radius: 0.5rem;
  color: var(--basic-light-gray);
  font-size: 1.5rem;
  font-weight: bold;
  outline: none;
  padding: 0.75rem 1rem;

  &:hover {
    color: var(--gray-1);
  }
`;

const LinksWrapper = styled.nav`
  display: flex;
  flex-grow: 1;
  padding-left: 1.5rem;
`;

const MainNavLink = styled(NavLink)`
  background-color: ${props => props.background};
  color: var(--basic-light-gray);
  text-decoration: none;
  font-size: 2.25rem;
  padding: 1rem 1.5rem;
  }
`;

const linkNames = ["Tasks", "Timer", "Calendar", "Users"];

const Nav = () => {
  const [activeMainNavLink, setActiveMainNavLink] = useState(linkNames[0]);

  return (
    <MainNavBar>
      <NavAddTaskBtn>Add Task</NavAddTaskBtn>
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
  );
};

export default Nav;
