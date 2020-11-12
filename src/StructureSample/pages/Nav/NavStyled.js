import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainNavBar = styled.div`
  background-color: var(--basic-navy-blue);
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background-color: #e0e0e0;
  border-radius: 5px 5px 0 0;
  border-right: var(--basic-navy-blue) solid 1px;
  color: var(--basic-navy-blue);
  text-decoration: none;
  font-size: 2.25rem;
  padding: 7px;
  text-align: center;
  width: 120px;
  }
`;
