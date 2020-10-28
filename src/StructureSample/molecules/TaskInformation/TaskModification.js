import { Rnd } from "react-rnd";
import React, { useRef, useState, useContext, useEffect } from "react";

//Icon
import CancelIcon from "../../../img/CancelIcon.svg";
import TickIcon from "../../../img/TickIcon.svg";
import ClockIcon from "../../../img/ClockIcon.svg";
import StatusIcon from "../../../img/StatusIcon.svg";
import UserIcon2 from "../../../img/UserIcon2.svg";
import TagIcon from "../../../img/TagIcon.svg";
import DescriptionIcon from "../../../img/DescriptionIcon.svg";
import UserIcon3 from "../../../img/UserIcon3.png";
import PriorityIcon from "../../../img/PriorityIcon.svg";
import WorkIcon from "../../../img/WorkIcon.png";
import HomeIcon from "../../../img/HomeIcon.svg";
import PersonalIcon from "../../../img/PersonalIcon.svg";
import ProjectIcon from "../../../img/ProjectIcon.svg";
import TypeIcon from "../../../img/TypeIcon.svg";
import { UserData } from "../../../contexts/UserData";

//Components
import RadioInput from "../../atoms/RadioInput";
import Image from "../../atoms/Image";
import {
  Background,
  Container,
  IconContainer,
  TaskHeader,
  TaskProperties,
  Photo,
  PhotoContainer,
  Warning,
  DateSection,
  Input,
  Div,
  Textarea,
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
          <TaskHeader>
            <Image
              classImage="iconSingle"
              srcImage={TickIcon}
              alternateTextImage="task"
              title="title"
            />
            <Input
              type="text"
              id="title"
              name="title"
              value={taskInformation.title}
              onChange={event => handleChangeInfoTask(event)}
            />
          </TaskHeader>
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
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={StatusIcon}
              alternateTextImage="status"
              title="status"
            />
            <Div>
              <RadioInput
                categories={options}
                name="status"
                onClickInput={event => handleChangeInfoTask(event)}
                isChecked={taskInformation.status}
              />
            </Div>
          </TaskProperties>
          <PhotoContainer>
            <Image
              classImage="iconSingle"
              srcImage={UserIcon2}
              alternateTextImage="users"
              title="users"
            />
            <Photo>
              <img
                src={task.imgCreator || UserIcon3}
                height="50"
                title="Creator"
                alt="creator"
              />
            </Photo>
            <Photo>
              <img
                src={task.imgAssign || UserIcon3}
                height="50"
                title="Assign"
                alt="assign"
              />
            </Photo>
          </PhotoContainer>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={PriorityIcon}
              alternateTextImage="priority"
              title="priority"
            />
            <Div>
              <RadioInput
                categories={priority}
                name="priority"
                onClickInput={event => handleChangeInfoTask(event)}
                isChecked={taskInformation.priority}
              />
            </Div>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={
                task.type === "Work"
                  ? WorkIcon
                  : task.type === "Home"
                  ? HomeIcon
                  : task.type === "Personal"
                  ? PersonalIcon
                  : TypeIcon
              }
              alternateTextImage="type"
              title="type"
            />
            <Div>
              <RadioInput
                categories={type}
                name="type"
                onClickInput={event => handleChangeInfoTask(event)}
                isChecked={taskInformation.type}
              />
            </Div>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={TagIcon}
              alternateTextImage="tags"
              title="tags"
            />
            <Input
              type="text"
              id="tags"
              name="tags"
              placeholder="tags"
              value={taskInformation.tags}
              onChange={event => handleChangeInfoTask(event)}
            />
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={DescriptionIcon}
              alternateTextImage="description"
              title="description"
            />
            <Textarea
              type="text"
              id="description"
              name="description"
              placeholder="description"
              value={taskInformation.description}
              onChange={event => handleChangeInfoTask(event)}
            />
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={ProjectIcon}
              alternateTextImage="project"
              title="project"
            />
            <Input
              type="text"
              id="project"
              name="project"
              placeholder="project"
              value={taskInformation.project}
              onChange={event => handleChangeInfoTask(event)}
            />
          </TaskProperties>
        </Container>
      </Rnd>
    </Background>
  );
}

export default TaskModification;
