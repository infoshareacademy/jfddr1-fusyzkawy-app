import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainNavBar = styled.div`
  background-color: var(--basic-navy-blue);
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

export const NavAddTaskBtn = styled.button`
  background-color: var(--basic-green);
  border: none;
  border-radius: 0.5rem;
  color: var(--basic-light-gray);
  font-size: 1.75rem;
  font-weight: bold;
  margin-right: 3rem;
  outline: none;
  padding: 0.75rem 1rem;

  &:hover {
    color: var(--gray-1);
  }
`;

export const LinksWrapper = styled.nav`
  align-self: flex-end;
  display: flex;
  flex-grow: 1;
  // padding-left: 1.5rem;
`;

export const MainNavLink = styled(NavLink)`
  color: var(--basic-light-gray);
  text-decoration: none;
  font-size: 2.25rem;
  padding: 0.5rem 1.5rem 0.25rem 1.5rem;
  text-align: center;
  width: 120px;
  }
`;
