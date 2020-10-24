import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Input from "../../atoms/Input";

export const NewInput = styled(Input)`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

// Timer
export const Header = styled.header`
  text-align: left;
  padding: 15px 20px 5px;
  background-color: var(--basic-white);
  font-size: 1.5rem;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const NewLink = styled(NavLink)`
  padding: 10px 10px;
  margin: 0 15px;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--gray-3);

  &:hover {
    color: var(--basic-green);
  }

  &:active {
    color: var(--basic-green);
  }
`;

//TimerCurrent & TimerWeek
export const ContainerBox = styled.div`
  background-color: var(--basic-white);
  margin: 20px;
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.15),
    0 2px 6px 2px rgba(60, 64, 67, 0.05);
  height: 600px;
  overflow: scroll;
  font-size: 1.5rem;
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

//TimerCurrent
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

//Timer Week
export const GridTemplateContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  margin: 0 auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 100%;
`;

export const LeftColumn = styled.p`
  text-align: left;
  padding-left: 30px;
`;

export const TaskNameColumn = styled(LeftColumn)`
  &:hover {
    color: var(--basic-green);
  }
`;
