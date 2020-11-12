import { Rnd } from "react-rnd";
import React, { useRef, useState, useContext } from "react";
//Icon
import EditIcon from "../../../img/EditIcon.svg";
import RemoveIcon from "../../../img/RemoveIcon.svg";
import CancelIcon from "../../../img/CancelIcon.svg";
import TickIcon from "../../../img/TickIcon.svg";
import ClockIcon from "../../../img/ClockIcon.svg";
import HourglassIcon from "../../../img/HourglassIcon.svg";
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
import InformationToDisplay from "./InformationToDisplay";
import Image from "../../atoms/Image";
import {
  Background,
  Container,
  IconContainer,
  Warning,
  TaskInformationContainer,
} from "./TaskInformationStyled";
import { deleteTask } from "../../../Firebase/firestore/tasksActions";

function TaskInformation({ task, onCancel, onChange }) {
  const { userUid, clearToast, displayToast } = useContext(UserData);
  const [viewDeleteWarnig, setViewDeleteWarning] = useState(false);
  const backgroundEl = useRef(null); // use to close Container with Task Information by click on <Background>

  function handlerRemove() {
    deleteTask(task.taskId, userUid, clearToast, displayToast);
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
              srcImage={EditIcon}
              alternateTextImage="edit"
              title="edit"
              onClick={() => onChange()}
              style={{ cursor: "pointer" }}
            />
            <Image
              classImage="iconTask"
              srcImage={RemoveIcon}
              alternateTextImage="remove"
              title="remove"
              onClick={() => setViewDeleteWarning(true)}
              style={{ cursor: "pointer" }}
            />
            <Image
              classImage="iconTask"
              srcImage={CancelIcon}
              alternateTextImage="cancel"
              title="cancel"
              onClick={onCancel}
              style={{ cursor: "pointer" }}
            />
          </IconContainer>
          {viewDeleteWarnig === true ? (
            <Warning>
              <p>Are you sure you want to delete the task?</p>
              <button onClick={handlerRemove}>Yes</button>
              <button onClick={() => setViewDeleteWarning(false)}>No</button>
            </Warning>
          ) : null}
          <TaskInformationContainer>
            <InformationToDisplay
              task={task}
              iconName={TickIcon}
              infoName="title"
              infoType="h2"
            />
            <InformationToDisplay
              task={task}
              iconName={ClockIcon}
              infoName="time"
              infoType="date"
            />
            <InformationToDisplay
              task={task}
              iconName={HourglassIcon}
              infoName="duration"
              infoType="duration"
            />
            <InformationToDisplay
              task={task}
              iconName={StatusIcon}
              infoName="status"
              infoType="p"
            />
            <InformationToDisplay
              task={task}
              iconName={PriorityIcon}
              infoName="priority"
              infoType="p"
            />
            <InformationToDisplay
              task={task}
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
              infoType="p"
            />
            <InformationToDisplay
              task={task}
              iconName={TagIcon}
              infoName="tags"
              infoType="TagsContainer"
            />
            <InformationToDisplay
              task={task}
              iconName={DescriptionIcon}
              infoName="description"
              infoType="p"
            />
            <InformationToDisplay
              task={task}
              iconName={ProjectIcon}
              infoName="project"
              infoType="p"
            />
          </TaskInformationContainer>
        </Container>
      </Rnd>
    </Background>
  );
}

export default TaskInformation;
