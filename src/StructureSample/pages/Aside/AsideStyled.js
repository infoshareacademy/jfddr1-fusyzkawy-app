import styled from "styled-components";

export const AsideStyled = styled.div`
  background-color: var(--basic-navy-blue);
  grid-area: aside;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-height: 100vh;
  padding: 0 12px 0 12px;
`;

export const LogoStyled = styled.a`
  display: block;
  width: 100%;
  height: 60px;
  margin: 20px 10px;
  text-align: center;
`;

export const ImgStyled = styled.img`
  max-width: 100%;
  height: 100%;
`;
