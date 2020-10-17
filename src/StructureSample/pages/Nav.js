import React from "react";
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
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem;

  &:hover {
    color: var(--gray-1);
  }
`;

const LinksWrapper = styled.nav`
  display: flax;
`;

const MainNavLink = styled(NavLink)`
  color: var(--basic-light-gray);
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0.75rem;

  &:hover {
    background-color: var(--extra-dark-gray);
  }
`;

const Nav = () => {
  return (
    <MainNavBar>
      <NavAddTaskBtn>Add Task</NavAddTaskBtn>
      <LinksWrapper>
        <MainNavLink to="/">Tasks</MainNavLink>
        <MainNavLink to="/timer">Timer</MainNavLink>
        <MainNavLink to="/calendar">Calendar</MainNavLink>
        <MainNavLink to="/users">Users</MainNavLink>
      </LinksWrapper>
      <UserInformation />
    </MainNavBar>
  );
};

export default Nav;
