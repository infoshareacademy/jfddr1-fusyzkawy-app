import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainNavBar = styled.div`
  background-color: var(--basic-navy-blue);
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

export const NavAddTaskBtn = styled.button`
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

export const LinksWrapper = styled.nav`
  display: flex;
  flex-grow: 1;
  padding-left: 1.5rem;
`;

export const MainNavLink = styled(NavLink)`
  background-color: ${props => props.background};
  color: var(--basic-light-gray);
  text-decoration: none;
  font-size: 2.25rem;
  padding: 1rem 1.5rem;
  }
`;
