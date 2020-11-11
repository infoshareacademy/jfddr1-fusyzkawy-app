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

export const InnerFormWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const InputsWrapper = styled.div`
  padding-top: 15px;
  width: 100%;
`;

export const MoreInputsWrapper = styled.div`
  display: ${props => props.display};
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 35px;
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

export const TaskNameInput = styled(Input)`
  font-size: 2.25rem;
  width: 100%;
  }
`;

export const AddTaskBtn = styled.button`
  align-self: flex-start;
  background-color: var(--basic-green);
  border: none;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  color: var(--basic-light-gray);
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  outline: none;
  padding: 5px 13px;

  &:hover {
    color: var(--gray-1);
  }
`;

export const OptionsBtn = styled.button`
  background-color: transparent;
  border: none;
  color: var(--sign-green);
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  outline: none;
  padding-top: 20px;
`;

export const OptionsBtnArrow = styled.p`
  font-size: 2.5rem;
  transform: ${props => props.rotate};
`;
