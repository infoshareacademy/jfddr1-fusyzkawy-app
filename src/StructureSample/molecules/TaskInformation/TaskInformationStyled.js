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
  position: absolute;
  top: 200px;
  left: 25vw;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  color: var(--gray-3);
  font-size: 1.5rem;
  max-height: 650px;
  //height: 70vh;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.18),
    0 9px 46px 8px rgba(0, 0, 0, 0.16), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  width: 448px;
  align-items: stretch;
  overflow: scroll;
  z-index: 5;
  padding: 8px 6px;
`;

export const IconContainer = styled.div`
display flex;
justify-content:flex-end;
height: 40px;
align-items: center;
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.5rem;
  font-weight: initial;
`;

export const TaskProperties = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  margin: 5px 0;
`;

export const Photo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  overflow: hidden;
  margin: 5px;
`;

export const PhotoContainer = styled.div`
  display: flex;
`;

export const TagsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const Tag = styled.li`
  padding: 0 5px;
`;