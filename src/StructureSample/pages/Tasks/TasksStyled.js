import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  background-color: var(--basic-light-gray);
  color: var(--gray-3);
  height: calc(100vh - 112px);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 12px;
  background-color: var(--basic-white);
`;

export const FilterBtn = styled.button`
  background-color: white;
  color: var(--gray-3);
  cursor: pointer;
  display: inline-block;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  background: none;
  background-image: none;
  border: 1px solid #ccc;
  padding: 0.375rem 1.5rem;
  border-radius: 4px 0 0 4px;
  line-height: normal;
  white-space: nowrap;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ClearFilterBtn = styled.button`
  background-color: white;
  color: var(--gray-3);
  cursor: pointer;
  display: inline-block;
  margin: 0;
  margin-left: -1px;
  text-align: center;
  vertical-align: middle;
  background: none;
  background-image: none;
  border: 1px solid #ccc;
  padding: 0.375rem 1.5rem;
  border-radius: 0 4px 4px 0;
  line-height: normal;
  white-space: nowrap;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ContainerBox = styled.div`
  background-color: var(--basic-white);
  margin: 12px;
  padding: 10px 0;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.15),
    0 2px 6px 2px rgba(60, 64, 67, 0.05);
  height: calc(100% - 74px);
  overflow-y: scroll;
  font-size: 1.5rem;
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

export const TasksTableHeader = styled.header`
  border-bottom: 2px solid var(--basic-light-gray);
  display: grid;
  grid-template-columns:
    minmax(70px, 1.5fr) minmax(110px, 2.5fr) minmax(70px, 1fr) minmax(80px, 1fr)
    minmax(80px, 1fr) minmax(80px, 1fr)
    minmax(90px, 1fr) minmax(90px, 1fr) minmax(100px, 1fr);
  margin-left: 10px;
  margin-right: 3px;
  padding: 10px;
`;

export const Task = styled.div`
  border-bottom: 2px solid var(--basic-light-gray);
  display: grid;
  grid-template-columns: 10fr minmax(100px, 1fr);
  margin-left: 10px;
  margin-right: 3px;
  padding: 10px;

  &:hover {
    box-shadow: 0 0.25px 3px var(--extra-gray),
      -0.5px 0.25px 3px var(--extra-gray);
    cursor: pointer;
  }
`;

export const TaskData = styled.div`
  display: grid;
  grid-template-columns:
    minmax(70px, 1.5fr) minmax(110px, 2.5fr) minmax(70px, 1fr) minmax(80px, 1fr)
    minmax(80px, 1fr)
    minmax(80px, 1fr)
    minmax(90px, 1fr) minmax(90px, 1fr);
  line-height: 25px;
  text-align: center;
`;

export const TasksHeaderField = styled.h3`
  text-align: center;
`;

export const TaskDataField = styled.p`
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 10px;
`;

export const TaskPriority = styled.p`
  color: ${props => props.color};
`;
