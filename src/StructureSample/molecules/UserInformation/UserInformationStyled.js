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
  padding: 18px;
  color: var(--basic-light-gray);
  font-size: 3rem;
`;
export const MenuStyled = styled.div`
  background: pink;
`;
export const OptionStyled = styled.p`
  background: red;
  font-size: 1.3rem;
  padding: 10px;
`;
export const HoverEffect = styled.div`
  ${ButtonStyled}:hover {
    cursor: pointer;
  }
  ${OptionStyled}:hover {
    cursor: pointer;
  }
`;
