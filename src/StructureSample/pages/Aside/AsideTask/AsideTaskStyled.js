import styled from "styled-components";

export const AsideTaskStyled = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 0 0 5px 10px;
  font-size: 1.5rem;
  color: var(--basic-light-gray);
  list-style-type: none;
  width: 220px;
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
  text-align: left;
  align-items: flex-start;
  background-color: var(--navy-blue-2);
  padding: 5px;
`;

export const PickedTask = styled(AsideTaskStyled)`
  font-weight: bold;
`;
