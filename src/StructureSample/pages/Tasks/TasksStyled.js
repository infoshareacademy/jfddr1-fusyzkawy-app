import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  background-color: var(--basic-light-gray);
  color: var(--gray-3);
  height: calc(100vh - 112px);
  width: calc(100vw - 262px);
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
  position: relative;
  width: calc(100% - 24px);
  background-color: var(--basic-white);
  margin: 12px;
  padding: 0 0 10px;
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

export const TasksTableHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: 53px;
  margin-left: 7px;
  margin-right: 1px;
  padding: 20px 12px 10px 13px;
  border-bottom: 2px solid var(--basic-light-gray);
  background-color: var(--basic-white);
  display: grid;
  grid-template-columns:
    minmax(70px, 1.5fr) minmax(110px, 2.5fr) minmax(70px, 1fr) minmax(80px, 1fr)
    minmax(80px, 1fr) minmax(80px, 1fr)
    minmax(90px, 1fr) minmax(90px, 1fr) minmax(100px, 1fr);
`;

export const Task = styled.div`
  border-bottom: 2px solid var(--basic-light-gray);
  display: grid;
  grid-template-columns: 10fr minmax(100px, 1fr);
  margin-left: 10px;
  margin-right: 4px;
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
