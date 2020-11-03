import styled from "styled-components";

export const UserInformationStyled = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  font-size: 1.8rem;
`;
export const ImageStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const PStyled = styled.p`
  padding: 10px;
  color: var(--basic-light-gray);
`;
export const ButtonStyled = styled.div`
  padding: 13px;
  color: var(--basic-light-gray);
  font-size: 3rem;
`;
export const MenuStyled = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  width: 250px;
  z-index: 1000;
  transition: height var(--speed) ease;
`;
export const OptionStyled = styled.div`
  height: 50px;
  background-color: var(--basic-navy-blue);
  color: var(--basic-light-gray);
  font-size: 1.5rem;
  padding: 10px;
  border-top: 0.5px solid var(--basic-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const OuterModal = styled.div`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.2s;
  width: 100vw;
  z-index: 7;
`;
export const HoverEffect = styled.div`
  ${ButtonStyled}:hover {
    cursor: pointer;
    background-color: var(--basic-blue);
  }
  ${OptionStyled}:hover {
    cursor: pointer;
    background-color: var(--basic-blue);
  }
`;
export const Icon = styled.span`
  --button-size: 30px;
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
`;
