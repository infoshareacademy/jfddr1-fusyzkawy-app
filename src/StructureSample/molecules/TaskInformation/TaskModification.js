import { Rnd } from "react-rnd";
import React, { useRef, useState, useContext, useEffect } from "react";

//Icon
import CancelIcon from "../../../img/CancelIcon.svg";
import TickIcon from "../../../img/TickIcon.svg";
import ClockIcon from "../../../img/ClockIcon.svg";
import StatusIcon from "../../../img/StatusIcon.svg";
import TagIcon from "../../../img/TagIcon.svg";
import DescriptionIcon from "../../../img/DescriptionIcon.svg";
import PriorityIcon from "../../../img/PriorityIcon.svg";
import WorkIcon from "../../../img/WorkIcon.png";
import HomeIcon from "../../../img/HomeIcon.svg";
import PersonalIcon from "../../../img/PersonalIcon.svg";
import ProjectIcon from "../../../img/ProjectIcon.svg";
import TypeIcon from "../../../img/TypeIcon.svg";
import { UserData } from "../../../contexts/UserData";

//Components
import Image from "../../atoms/Image";
import InformationToModify from "./InformationToModify";
import {
  Background,
  Container,
  IconContainer,
  TaskProperties,
  Warning,
  DateSection,
  Input,
  Div,
} from "./TaskInformationStyled";
import { changeTask } from "../../../Firebase/firestore/tasksActions";

const options = ["New task", "In progres", "Completed", "On hold", "Cancelled"];
const priority = ["High", "Medium", "Low"];
const type = ["Work", "Personal", "Home"];

function TaskModification({ task, onCancel, onApply }) {
  const { userUid, clearToast, displayToast } = useContext(UserData);
  const [viewCancelWarnig, setViewCancelWarning] = useState(false);
  const backgroundEl = useRef(null); // use to close Container with Task Information by click on <Background>
  const [changedData, setChangedData] = useState({});
  const [taskDate, setTaskDate] = useState({
    startTime: task.start.toLocaleTimeString("PL-PL", {
      hour: "numeric",
      minute: "numeric",
    }),
    startDate: `${task.start.getFullYear()}-${(
      "0" +
      (task.start.getMonth() + 1)
    ).slice(-2)}-${("0" + task.start.getDate()).slice(-2)}`,
    endTime: task.end.toLocaleTimeString("PL-PL", {
      hour: "numeric",
      minute: "numeric",
    }),
    endDate: `${task.end.getFullYear()}-${(
      "0" +
      (task.end.getMonth() + 1)
    ).slice(-2)}-${("0" + task.end.getDate()).slice(-2)}`,
  });
  const [taskInformation, setTaskInformation] = useState({
    title: task.title,
    type: task.type,
    description: task.description,
    status: task.status,
    priority: task.priority,
    project: task.project,
    tags: task.tags,
  });

  function handleChangeInfoTask(event) {
    setTaskInformation({
      ...taskInformation,
      [event.target.name]: event.target.value,
    });
    setChangedData({
      ...changedData,
      [event.target.name]: event.target.value,
    });
  }
  function handleChangeDateTask(event) {
    setTaskDate({
      ...taskDate,
      [event.target.name]: event.target.value,
    });
  }
  useEffect(() => {
    setChangedData({
      ...changedData,
      start: `${taskDate.startDate
        .split("-")
        .join(" ")} ${taskDate.startTime.split(":").join(" ")} 00`,
      end: `${taskDate.endDate.split("-").join(" ")} ${taskDate.endTime
        .split(":")
        .join(" ")} 00`,
    });
  }, [taskDate]);

  function handlerApply() {
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
    onCancel();
  }

  return (
    <Background
      ref={backgroundEl} // set backgroundEl on <Background>
      onClick={event => event.target === backgroundEl.current && onCancel()}
    >
      <Rnd
        default={{
          x: 270,
          y: 200,
          width: 380,
          height: 520,
        }}
      >
        <Container>
          <IconContainer>
            <Image
              classImage="iconTask"
              srcImage={TickIcon}
              alternateTextImage="apply"
              title="apply"
              onClick={() => handlerApply()}
            />
            <Image
              classImage="iconTask"
              srcImage={CancelIcon}
              alternateTextImage="cancel"
              title="cancel"
              onClick={() => setViewCancelWarning(true)}
            />
          </IconContainer>
          {viewCancelWarnig === true ? (
            <Warning>
              <p>Should we save your changes?</p>
              <button onClick={() => handlerApply()}>Save</button>
              <button
                onClick={() => {
                  setChangedData({});
                  onCancel();
                  onApply();
                }}
              >
                Don't save
              </button>
              <button onClick={() => setViewCancelWarning(false)}>
                Cancel
              </button>
            </Warning>
          ) : null}
          <InformationToModify
            task={taskInformation}
            iconName={TickIcon}
            infoName="title"
            infoType="text"
            onChange={event => handleChangeInfoTask(event)}
          />
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={ClockIcon}
              alternateTextImage="time"
              title="time"
            />
            <Div>
              <p>Start:</p>
              <DateSection>
                <Input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={taskDate.startDate}
                  onChange={event => handleChangeDateTask(event)}
                />
                <Input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={taskDate.startTime}
                  onChange={event => handleChangeDateTask(event)}
                />
              </DateSection>
              <p>End:</p>
              <DateSection>
                <Input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={taskDate.endDate}
                  onChange={event => handleChangeDateTask(event)}
                />
                <Input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={taskDate.endTime}
                  onChange={event => handleChangeDateTask(event)}
                />
              </DateSection>
            </Div>
          </TaskProperties>
          <InformationToModify
            task={taskInformation}
            iconName={StatusIcon}
            infoName="status"
            infoType="radioInput"
            onChange={event => handleChangeInfoTask(event)}
            categories={options}
          />
          <InformationToModify
            task={taskInformation}
            iconName={PriorityIcon}
            infoName="priority"
            infoType="radioInput"
            onChange={event => handleChangeInfoTask(event)}
            categories={priority}
          />
          <InformationToModify
            task={taskInformation}
            iconName={
              task.type === "Work"
                ? WorkIcon
                : task.type === "Home"
                ? HomeIcon
                : task.type === "Personal"
                ? PersonalIcon
                : TypeIcon
            }
            infoName="type"
            infoType="radioInput"
            onChange={event => handleChangeInfoTask(event)}
            categories={type}
          />
          <InformationToModify
            task={taskInformation}
            iconName={TagIcon}
            infoName="tags"
            infoType="text"
            onChange={event => handleChangeInfoTask(event)}
          />
          <InformationToModify
            task={taskInformation}
            iconName={DescriptionIcon}
            infoName="description"
            infoType="textarea"
            onChange={event => handleChangeInfoTask(event)}
          />
          <InformationToModify
            task={taskInformation}
            iconName={ProjectIcon}
            infoName="project"
            infoType="text"
            onChange={event => handleChangeInfoTask(event)}
          />
        </Container>
      </Rnd>
    </Background>
  );
}

export default TaskModification;
