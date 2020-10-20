import React, { useRef, useState } from "react";
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
  OuterModal,
} from "../../StyledComponents/StyledAddTaskForm";

const AddTaskForm = ({ opacity, pointerEvents, closeModal }) => {
  const [activeMoreOptions, setActiveMoreOptions] = useState(false);

  const emptyTaskData = {
    deadline: "",
    description: "",
    estimatedTime: "",
    isDone: false,
    priority: "",
    project: "",
    taskName: "",
    type: "",
  };

  const [taskData, setTaskData] = useState(emptyTaskData);

  const handleChange = event => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    closeModal(false);
    setActiveMoreOptions(false);
    setTaskData(emptyTaskData);
  };

  const handleOptionsBtnClick = event => {
    event.preventDefault();
    setActiveMoreOptions(!activeMoreOptions);
  };

  const handleFocus = event => (event.currentTarget.type = "date");
  const handleBlur = event => {
    event.currentTarget.type = "text";
    event.currentTarget.placeholder = "Deadline";
  };

  const outerModal = useRef(null);

  const outsideClick = event => {
    if (event.target === outerModal.current) {
      setActiveMoreOptions(false);
      setTaskData(emptyTaskData);
      closeModal(false);
    }
  };

  return (
    <OuterModal
      opacity={opacity}
      pointerEvents={pointerEvents}
      ref={outerModal}
      onClick={outsideClick}
    >
      <FormWrapper onSubmit={handleSubmit}>
        <InnerFormWrapper>
          <InputsWrapper>
            <TaskNameInput
              type="text"
              placeholder="Task name"
              name="taskName"
              value={taskData.taskName}
              onChange={handleChange}
            />
            <MoreInputsWrapper display={!activeMoreOptions ? "none" : "grid"}>
              <Input
                placeholder="Choose project"
                name="project"
                value={taskData.project}
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Estimated time (hrs)"
                name="estimatedTime"
                value={taskData.estimatedTime}
                onChange={handleChange}
              />
              <Input
                list="type"
                placeholder="Type"
                name="type"
                value={taskData.type}
                onChange={handleChange}
              />
              <datalist id="type">
                <option value="Work" />
                <option value="Personal" />
                <option value="Home" />
              </datalist>
              <Input
                type="text"
                placeholder="Deadline"
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="deadline"
                value={taskData.deadline}
                onChange={handleChange}
              />
              <Input
                list="priority"
                placeholder="Priority"
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
              />
              <datalist id="priority">
                <option value="High" />
                <option value="Medium" />
                <option value="Low" />
              </datalist>
              <Input
                type="text"
                placeholder="Description"
                name="description"
                value={taskData.description}
                onChange={handleChange}
              />
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
    </OuterModal>
  );
};

export default AddTaskForm;
