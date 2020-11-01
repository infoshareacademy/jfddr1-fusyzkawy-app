import styled from "styled-components";

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

export const FilterSortBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px 10px;
  margin: 0 15px;
  font-size: 1.5rem;
  color: var(--gray-3);

  &:hover {
    color: var(--basic-green);
  }
`;

export const ContainerBox = styled.div`
  background-color: var(--basic-white);
  margin: 20px;
  padding: 10px 0;
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

export const TasksTableHeader = styled.header`
  border-bottom: 2px solid var(--basic-light-gray);
  display: grid;
  grid-template-columns: 1.5fr 2.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-left: 10px;
  margin-right: 3px;
  padding: 10px;
`;

export const Task = styled.div`
  border-bottom: 2px solid var(--basic-light-gray);
  display: grid;
  grid-template-columns: 10fr 1fr;
  margin-left: 10px;
  margin-right: 3px;
  padding: 10px;

  &:hover {
    box-shadow: 0 0.25px 3px var(--extra-gray),
      -0.5px 0.25px 3px var(--extra-gray);
  }
`;

export const TaskData = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const TasksHeaderField = styled.h3`
  text-align: start;
`;

export const TaskDataField = styled.p`
  text-align: start;
`;

export const TaskPriority = styled.p`
  color: ${props => props.color};
`;