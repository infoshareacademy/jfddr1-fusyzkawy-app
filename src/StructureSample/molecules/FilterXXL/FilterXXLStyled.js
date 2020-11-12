import styled from "styled-components";

export const OuterModal = styled.div`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.2s;
  width: 100vw;
  z-index: 7;
`;

export const FormWrapper = styled.form`
  background-color: var(--basic-white);
  border-radius: 8px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.18),
    0 9px 46px 8px rgba(0, 0, 0, 0.16), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  padding: 20px 35px 5px 35px;
  text-align: center;
  width: 100%;
`;

export const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 1.5px solid var(--sign-green);
  background-color: transparent;
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--sign-green);
  cursor: pointer;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
