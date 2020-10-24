import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Background from "../../../img/background-start-page.jpg";

export const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-size: cover;
  background-position: 40% 50%;
`;

export const NavWrapper = styled.nav`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  width: 100px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.4);
  font-size: 1.8rem;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  line-height: 3.5rem;
  color: var(--basic-light-gray);

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.8);
  }
`;
