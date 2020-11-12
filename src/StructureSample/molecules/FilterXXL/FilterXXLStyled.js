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
  padding: 20px 30px 20px 30px;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: default;
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

export const Btn = styled.button`
  background-color: var(--basic-green);
  border: none;
  border-radius: 0.5rem;
  color: var(--basic-light-gray);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  outline: none;
  padding: 0.75rem 1rem;

  &:hover {
    color: var(--gray-1);
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1.75rem;
`;

export const Section = styled.section`
  padding: 10px 0;
  // text-align: left;
`;

export const CheckboxesContainer = styled.div`
  display: grid;
  font-size: 1.5rem;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
  padding-top: 5px;
  text-align: left;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  justify-self: end;
`;
