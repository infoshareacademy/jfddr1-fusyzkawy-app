import styled from "styled-components";

export const PrettyTask = styled.p`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 0 0 5px 10px;
  font-size: 1.5rem;
  color: var(--basic-light-gray);
  list-style-type: none;
  width: 220px;
  &:hover {
    cursor: pointer;
  }
`;
export const PickedTask = styled(PrettyTask)`
  color: var(--basic-green);
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
export const AsidePlayStopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > * {
    align-items: center;
    & > .time {
      font-size: 1.5rem;
      color: var(--basic-light-gray);
    }
  }
`;
