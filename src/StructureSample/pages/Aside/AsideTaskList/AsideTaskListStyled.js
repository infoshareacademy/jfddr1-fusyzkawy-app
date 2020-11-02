import styled from "styled-components";

export const AsideTaskListStyled = styled.div`
  background: var(--basic-navy-blue);
  border: 1px solid black;
  width: 90%;
  max-height: 50vh;
  flex-grow: 1;
  box-shadow: inset 4px 4px 10px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  margin-bottom: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 10px;
  /* Scrollbar */
  &::-webkit-scrollbar {
    width: 7px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--sign-blue);
    border-radius: 10px;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--basic-blue);
  }
`;
export const AsideTaskListTitle = styled.h2`
  color: var(--basic-light-gray);
  margin: 5px auto 0 auto;
  font-size: 1.7rem;
`;
