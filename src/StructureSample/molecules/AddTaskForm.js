import React from "react";
import {
  FormWrapper,
  Input,
  AddTaskBtn,
} from "../../StyledComponents/StyledAddTaskForm";

const AddTaskForm = ({ opacity }) => {
  return (
    <FormWrapper opacity={opacity}>
      <Input placeholder="Task name" />
      <AddTaskBtn type="submit">+</AddTaskBtn>
    </FormWrapper>
  );
};

export default AddTaskForm;
