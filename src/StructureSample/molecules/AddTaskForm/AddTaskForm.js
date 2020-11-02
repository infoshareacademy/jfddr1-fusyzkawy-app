import React, { useRef, useState, useContext } from "react";
import { Rnd } from "react-rnd";
import { UserData } from "../../../contexts/UserData";
import { addTask } from "../../../Firebase/firestore/tasksActions";
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
} from "./AddTaskFormStyled";

const AddTaskForm = ({
  closeModal,
  initStartData,
  initStartTime,
  initEndData,
  initEndTime,
}) => {
  const { userUid, clearToast, displayToast } = useContext(UserData);
  const [activeMoreOptions, setActiveMoreOptions] = useState(false);
  const emptyTaskData = {
    title: "",
    type: "",
    description: "",
    status: "",
    priority: "",
    project: "",
    active: "stop",
  };
  const initialTaskTime = {
    startDate: initStartData ? initStartData : "",
    startTime: initStartTime ? initStartTime : "",
    endDate: initEndData ? initEndData : "",
    endTime: initEndTime ? initEndTime : "",
  };

  const [taskData, setTaskData] = useState(emptyTaskData);
  const [taskTime, setTaskTime] = useState(initialTaskTime);

  const handleChangeData = event => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };
  const handleChangeTime = event => {
    setTaskTime({ ...taskTime, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newTask = {
      ...taskData,
      start: `${taskTime.startDate
        .split("-")
        .join(" ")} ${taskTime.startTime.split(":").join(" ")} 00`,
      end: `${taskTime.endDate.split("-").join(" ")} ${taskTime.endTime
        .split(":")
        .join(" ")} 00`,
    };
    addTask(newTask, userUid, clearToast, displayToast);
    closeModal(false);
    setActiveMoreOptions(false);
    setTaskData(emptyTaskData);
    setTaskTime(initialTaskTime);
  };

  const handleOptionsBtnClick = event => {
    event.preventDefault();
    setActiveMoreOptions(!activeMoreOptions);
  };

  const handleFocusData = event => {
    event.currentTarget.type = "date";
  };
  const handleFocusTime = event => {
    event.currentTarget.type = "time";
  };
  const handleBlur = event => {
    event.currentTarget.type = "text";
  };

  const outerModal = useRef(null);

  const outsideClick = event => {
    if (event.target === outerModal.current) {
      setActiveMoreOptions(false);
      setTaskData(emptyTaskData);
      setTaskTime(initialTaskTime);
      closeModal(false);
    }
  };

  return (
    <OuterModal ref={outerModal} onClick={outsideClick}>
      <Rnd
        default={{
          x: 260,
          y: 110,
          width: 600,
          height: 136,
        }}
      >
        <FormWrapper onSubmit={handleSubmit}>
          <InnerFormWrapper>
            <InputsWrapper>
              <TaskNameInput
                type="text"
                placeholder="Task Title"
                name="title"
                value={taskData.title}
                onChange={handleChangeData}
                required
              />
              <MoreInputsWrapper display={!activeMoreOptions ? "none" : "grid"}>
                <Input
                  list="type"
                  placeholder="Type"
                  name="type"
                  value={taskData.type}
                  onChange={handleChangeData}
                />
                <datalist id="type">
                  <option value="Work" />
                  <option value="Personal" />
                  <option value="Home" />
                </datalist>
                <Input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={taskData.description}
                  onChange={handleChangeData}
                />
                <Input
                  type="text"
                  placeholder="Start Date"
                  onFocus={handleFocusData}
                  onBlur={handleBlur}
                  name="startDate"
                  value={taskTime.startDate}
                  onChange={handleChangeTime}
                />
                <Input
                  type="text"
                  placeholder="Start Time"
                  onFocus={handleFocusTime}
                  onBlur={handleBlur}
                  name="startTime"
                  value={taskTime.startTime}
                  onChange={handleChangeTime}
                />
                <Input
                  type="text"
                  placeholder="End Date"
                  onFocus={handleFocusData}
                  onBlur={handleBlur}
                  name="endDate"
                  value={taskTime.endDate}
                  onChange={handleChangeTime}
                />
                <Input
                  type="text"
                  placeholder="End Time"
                  onFocus={handleFocusTime}
                  onBlur={handleBlur}
                  name="endTime"
                  value={taskTime.endTime}
                  onChange={handleChangeTime}
                />
                <Input
                  list="status"
                  placeholder="Status"
                  name="status"
                  value={taskData.status}
                  onChange={handleChangeData}
                />
                <datalist id="status">
                  <option value="New task" />
                  <option value="In progress" />
                  <option value="Completed" />
                  <option value="On hold" />
                  <option value="Cancelled" />
                </datalist>
                <Input
                  list="priority"
                  placeholder="Priority"
                  name="priority"
                  value={taskData.priority}
                  onChange={handleChangeData}
                />
                <datalist id="priority">
                  <option value="High" />
                  <option value="Medium" />
                  <option value="Low" />
                </datalist>
                <Input
                  placeholder="Choose project"
                  name="project"
                  value={taskData.project}
                  onChange={handleChangeData}
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
      </Rnd>
    </OuterModal>
  );
};

export default AddTaskForm;
