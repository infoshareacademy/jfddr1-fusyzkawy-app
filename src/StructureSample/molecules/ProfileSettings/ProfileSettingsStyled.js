import styled from "styled-components";

export const UserCointainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 25px;
  padding: 20px;
  font-size: 1.5rem;
  background-color: var(--basic-white);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.18),
    0 9px 46px 8px rgba(0, 0, 0, 0.16), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;

export const UserPhoto = styled.div`
  height: 200px;
  width: 150px;
  margin: 20px auto 20px 200px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.1),
    0 9px 46px 8px rgba(0, 0, 0, 0.08), 0 11px 15px -7px rgba(0, 0, 0, 0.11);
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px;
`;
