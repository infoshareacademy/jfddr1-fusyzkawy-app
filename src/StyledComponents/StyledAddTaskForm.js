import styled from "styled-components";

export const OuterModal = styled.div`
  height: 100vh;
  left: 0;
  opacity: ${props => props.opacity};
  pointer-events: ${props => props.pointerEvents};
  position: absolute;
  top: 0;
  transition: opacity 0.2s;
  width: 100vw;
`;

export const FormWrapper = styled.form`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 8px;
  padding: 20px 35px 5px 35px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.3);
  background-color: var(--sign-gray);
`;

export const InnerFormWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputsWrapper = styled.div`
  padding-top: 15px;
`;

export const MoreInputsWrapper = styled.div`
  display: ${props => props.display};
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 35px;
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

export const TaskNameInput = styled(Input)`
  font-size: 2.25rem;
  width: 420px;
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
