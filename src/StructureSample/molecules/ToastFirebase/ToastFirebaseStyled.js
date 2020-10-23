import styled, { keyframes } from "styled-components";

const ride = keyframes`
0% {
  top: -80px;
}
10% 
{
  top: 20px;
}
90% 
{
  top: 20px;
}
100% {
  top: -80px;
}
`;

export const Toast = styled.div.attrs(props => ({
  display: props.show ? "block" : "none",
  animation: props.active ? ride : "none",
  color: props.success ? "var(--sign-green)" : "rgba(255, 0, 0, 1)",
}))`
  display: ${props => props.display};
  animation: ${props => props.animation} 5s linear;
  position: fixed;
  top: -80px;
  left: 50%;
  z-index: 10000000;
  transform: translate(-50%);
  min-height: 35px;
  width: fit-content;
  border-radius: 3px;
  padding: 0 30px;
  box-shadow: 0px 0px 2px 1px ${props => props.color};
  background-color: var(--sign-gray);
  font-size: 1.6rem;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  line-height: 35px;
  letter-spacing: 0.8px;
  color: ${props => props.color};
`;
