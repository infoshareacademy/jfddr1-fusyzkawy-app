import styled from "styled-components";

export const AsideTaskListStyled = styled.div`
  background: var(--basic-navy-blue);
  border: 1px solid black;
  width: 90%;
  max-height: 50%;
  flex-grow: 1;
  box-shadow: inset 4px 4px 10px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  margin-bottom: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
`;
