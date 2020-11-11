import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const Button = styled.button`
  align-self: center;
  background-color: var(--basic-blue);
  border: none;
  border-radius: 2px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  height: fit-content;
  padding: 5px 5px 2px;
  width: fit-content;
  transition: all 0.2s;
`;

export const Div = styled.div`
  width: 50px;
  padding-left: 10px;
`;
