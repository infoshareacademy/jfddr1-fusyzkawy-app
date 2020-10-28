import { Rnd } from "react-rnd";
import React, { useRef, useState, useEffect } from "react";
//import  { useContext} from "react";

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
//import { UserData } from "../../../contexts/UserData";

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
} from "./TaskInformationStyled";
//import { deleteTask } from "../../../Firebase/firestore/tasksActions";

const options = ["New task", "In progres", "Completed", "On hold", "Cancelled"];
const priorities = ["High", "Medium", "Low"];
const type = ["Work", "Personal", "Home"];

function TaskModification({ task, onCancel }) {
  const [viewCancelWarnig, setViewCancelWarning] = useState(false);
  const backgroundEl = useRef(null); // use to close Container with Task Information by click on <Background>
  const generalStyle = { margin: "10px 5px" };
  const [taskDate, setTaskDate] = useState({
    startTime: "",
    startDate: "",
    endTime: "",
    endDate: "",
  });

  useEffect(() => {
    setTaskDate({
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
  }, [task]);

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
              alternateTextImage="edit"
              title="edit"
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
              <p>Do you want to exit without saving changes</p>
              <button onClick={() => onCancel()}>Yes</button>
              <button onClick={() => setViewCancelWarning(false)}>No</button>
            </Warning>
          ) : null}
          <TaskHeader>
            <Image
              classImage="iconSingle"
              srcImage={TickIcon}
              alternateTextImage="task"
              title="title"
            />
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              style={generalStyle}
            ></input>
          </TaskHeader>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={ClockIcon}
              alternateTextImage="time"
              title="time"
            />
            <div style={generalStyle}>
              <p>Start:</p>
              <DateSection>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={taskDate.startDate}
                  style={generalStyle}
                ></input>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={taskDate.startTime}
                  style={generalStyle}
                ></input>
              </DateSection>
              <p>End:</p>
              <DateSection>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={taskDate.endDate}
                  style={generalStyle}
                ></input>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={taskDate.endTime}
                  style={generalStyle}
                ></input>
              </DateSection>
            </div>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={StatusIcon}
              alternateTextImage="status"
              title="status"
            />
            <div style={generalStyle}>
              <RadioInput
                categories={options}
                name="status"
                //onClickInput={handlerOnClick}
              />
            </div>
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
            <div style={generalStyle}>
              <RadioInput
                categories={priorities}
                name="priorities"
                //onClickInput={handlerOnClick}
              />
            </div>
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
            <div style={generalStyle}>
              <RadioInput
                categories={type}
                name="type"
                //onClickInput={handlerOnClick}
              />
            </div>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={TagIcon}
              alternateTextImage="tags"
              title="tags"
            />
            <input
              type="text"
              id="tags"
              name="tags"
              placeholder="tags"
              value={task.tags}
              style={generalStyle}
            ></input>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={DescriptionIcon}
              alternateTextImage="description"
              title="description"
            />
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="description"
              style={generalStyle}
              value={task.description}
            />
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={ProjectIcon}
              alternateTextImage="project"
              title="project"
            />
            <input
              type="text"
              id="project"
              name="project"
              placeholder="project"
              value={task.project}
              style={generalStyle}
            ></input>
          </TaskProperties>
        </Container>
      </Rnd>
    </Background>
  );
}

export default TaskModification;
