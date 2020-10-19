import React from "react";
import {
  FormWrapper,
  TaskNameInput,
  Input,
  AddTaskBtn,
  InnerFormWrapper,
  MoreInputsWrapper,
  InputsWrapper,
} from "../../StyledComponents/StyledAddTaskForm";

const AddTaskForm = ({ opacity, pointerEvents }) => {
  return (
    <FormWrapper opacity={opacity} pointerEvents={pointerEvents}>
      <InnerFormWrapper>
        <InputsWrapper>
          <TaskNameInput placeholder="Task name" />
          <MoreInputsWrapper>
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
      <div>
        <p>More options</p>
        <p>&#x027E8;</p>
      </div>
    </FormWrapper>
  );
};

export default AddTaskForm;
