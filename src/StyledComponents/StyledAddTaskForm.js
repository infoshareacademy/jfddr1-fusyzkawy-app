import styled from "styled-components";

export const FormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props.opacity};
  pointer-events: ${props => props.pointerEvents};
  border-radius: 8px;
  padding: 20px 35px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  background-color: var(--sign-gray);
  transition: opacity 0.2s;
`;

export const InnerFormWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputsWrapper = styled.div`
  padding-top: 15px;
`;

export const MoreInputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 35px;
`;

export const TaskNameInput = styled.input`
  display: block;
  border: none;
  border-bottom: 1.5px solid var(--sign-green);
  background-color: transparent;
  font-size: 2.25rem;
  font-weight: 500;
  color: var(--sign-green);
  cursor: pointer;
  width: 420px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
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
  width: 200px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const AddTaskBtn = styled.button`
  align-self: flex-start;
  background-color: var(--basic-green);
  border: none;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  color: var(--basic-light-gray);
  font-size: 3rem;
  font-weight: bold;
  outline: none;
  padding: 5px 13px;

  &:hover {
    color: var(--gray-1);
  }
`;
