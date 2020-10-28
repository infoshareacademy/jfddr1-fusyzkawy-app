import styled from "styled-components";

export const AsideTaskStyled = styled.p`
  font-size: 1.5rem;
  color: var(--basic-light-gray);
  padding-left: 10px;
  list-style-type: none;
`;

export const HoverEffect = styled.div`
  ${AsideTaskStyled}:hover {
    cursor: pointer;
  }
`;

export const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  margin-left: 10px;
  background-color: var(--navy-blue-2);
  padding: 5px;
`;
