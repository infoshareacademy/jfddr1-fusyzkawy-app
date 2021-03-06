import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  color: var(--gray-3);
  font-size: 1.5rem;
  height: 100%;
  width: 100%;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.18),
    0 9px 46px 8px rgba(0, 0, 0, 0.16), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  align-items: stretch;
  overflow-y: scroll;
  z-index: 5;
  padding: 8px 6px;
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

export const IconContainer = styled.div`
display flex;
justify-content:flex-end;
height: 40px;
align-items: center;

`;
export const TaskInformationContainer = styled.div`
  cursor: default;
`;
export const TaskProperties = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  margin: 5px 0;
`;

export const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const Tag = styled.li`
  padding: 0 5px;
`;

export const Warning = styled.div`
  background: var(--task-red-light);
  border-radius: 10px;
  width: 95%;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin: 10px 5px;
`;

export const Div = styled.div`
  margin: 10px 5px;
`;
export const Textarea = styled.textarea`
  margin: 10px 5px;
`;

export const P = styled.p`
  margin: 10px 5px;
`;
export const H2 = styled.h2`
  margin: 10px 5px;
`;
