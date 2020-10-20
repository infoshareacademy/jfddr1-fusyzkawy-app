import React, { useState } from "react";
import {
  FormWrapper,
  TaskNameInput,
  Input,
  AddTaskBtn,
  InnerFormWrapper,
  MoreInputsWrapper,
  InputsWrapper,
  OptionsBtn,
  OptionsBtnArrow,
} from "../../StyledComponents/StyledAddTaskForm";

const AddTaskForm = ({ opacity, pointerEvents }) => {
  const [activeMoreOptions, setActiveMoreOptions] = useState(false);

  const handleOptionsBtnClick = event => {
    event.preventDefault();
    setActiveMoreOptions(!activeMoreOptions);
  };

  return (
    <FormWrapper opacity={opacity} pointerEvents={pointerEvents}>
      <InnerFormWrapper>
        <InputsWrapper>
          <TaskNameInput placeholder="Task name" />
          <MoreInputsWrapper display={!activeMoreOptions ? "none" : "grid"}>
            <Input placeholder="Choose project" />
            <Input placeholder="Estimated duration time" />
            <Input placeholder="Subtask" />
            <Input placeholder="Start time" />
            <Input placeholder="Type" />
            <Input placeholder="Deadline" />
            <Input placeholder="Priority" />
            <Input placeholder="Description" />
          </MoreInputsWrapper>
        </InputsWrapper>
        <AddTaskBtn type="submit">+</AddTaskBtn>
      </InnerFormWrapper>
      <OptionsBtn onClick={handleOptionsBtnClick}>
        <p>{!activeMoreOptions ? "More options" : "Less options"}</p>
        <OptionsBtnArrow
          rotate={!activeMoreOptions ? "rotate(-90deg)" : "rotate(90deg)"}
        >
          &#x027E8;
        </OptionsBtnArrow>
      </OptionsBtn>
    </FormWrapper>
  );
};

export default AddTaskForm;
