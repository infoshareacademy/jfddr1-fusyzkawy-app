import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  padding: 35px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  background-color: var(--sign-gray);
`;

export const SignTitle = styled.h2`
  margin: 15px 0;
  font-size: 3.4rem;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  line-height: 3.5rem;
  color: var(--sign-green);
`;
export const SignInput = styled.input`
  display: block;
  margin-top: 5px;
  border: none;
  padding: 5px 0;
  border-bottom: 1.5px solid var(--sign-green);
  width: 350px;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 500;
  color: var(--sign-green);
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
export const SignButton = styled.button`
  margin-top: 40px;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
  background-color: var(--sign-green);
  font-size: 2rem;
  text-transform: capitalize;
  line-height: 4.8rem;
  color: var(--sign-gray);
  cursor: pointer;
  &:active {
    border: none;
    outline: none;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.6);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
export const SignFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

export const StyledLink = styled(Link)`
  width: 50px;
  text-align: left;
  text-transform: capitalize;
  text-decoration: none;
  color: var(--sign-green);
  &:hover {
    text-decoration: underline;
  }
`;
