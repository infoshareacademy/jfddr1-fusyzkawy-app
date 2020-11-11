import styled from "styled-components";

export const AsideTimerStyled = styled.div`
  background: var(--basic-navy-blue);
  border: 1px solid var(--basic-aside-shadow);
  width: 100%;
  box-shadow: inset 4px 4px 10px 0px var(--basic-aside-shadow),
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  display: flex;
  flex-basis: 50%;
  flex-flow: column nowrap;
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 40vh;
  margin-bottom: 10px;
  /* Scrollbar */
  scrollbar-color: var(--sign-blue) transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 6px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--sign-blue);
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--basic-blue);
  }
`;
export const AsideTimerTitle = styled.h2`
  color: var(--basic-light-gray);
  margin: 5px auto;
  font-size: 1.7rem;
`;
export const AsideNoTasks = styled.p`
  color: var(--basic-light-gray);
  margin: 5px auto;
  font-size: 1.5rem;
`;
