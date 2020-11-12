import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  background-color: var(--basic-light-gray);
  color: var(--gray-3);
  height: calc(100vh - 112px);
  width: calc(100vw - 262px);
`;
// Timer
export const Header = styled.header`
  padding: 0 12px;
  background-color: var(--basic-white);
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 50px;
`;

//TimerCurrent
export const ContainerBox = styled.div`
  background-color: var(--basic-white);
  margin: 12px;
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.15),
    0 2px 6px 2px rgba(60, 64, 67, 0.05);
  height: calc(100% - 74px);
  overflow: scroll;
  font-size: 1.5rem;
  /* Scrollbar */
  scrollbar-color: var(--sign-blue) transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
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

export const Task = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 50% 40% 10%;
  align-items: end;
  text-align: left;
  overflow: "hidden";
`;

export const TaskName = styled.p`
  padding-left: 30px;
  margin: 0;
  overflow: hidden;
  height: 20px;
  &:hover {
    color: var(--basic-green);
  }
`;

export const GridContainerSeffEnd = styled.div`
  justify-self: end;
`;
