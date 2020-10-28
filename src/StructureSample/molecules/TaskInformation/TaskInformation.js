import { Rnd } from "react-rnd";
import React, { useRef, useState, useContext } from "react";
//Icon
import EditIcon from "../../../img/EditIcon.svg";
import RemoveIcon from "../../../img/RemoveIcon.svg";
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

import Date from "../../atoms/Date";
import Image from "../../atoms/Image";
import {
  Background,
  Container,
  IconContainer,
  TaskHeader,
  TaskProperties,
  Photo,
  PhotoContainer,
  TagsContainer,
  Tag,
  Warning,
  H2,
  P,
} from "./TaskInformationStyled";
import { deleteTask } from "../../../Firebase/firestore/tasksActions";

function TaskInformation({ task, onCancel, onChange }) {
  const { userUid, clearToast, displayToast } = useContext(UserData);
  const [viewDeleteWarnig, setViewDeleteWarning] = useState(false);
  const backgroundEl = useRef(null); // use to close Container with Task Information by click on <Background>
  const tags = task.tags?.split(" ");

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
            />
            <Image
              classImage="iconTask"
              srcImage={RemoveIcon}
              alternateTextImage="remove"
              title="remove"
              onClick={() => setViewDeleteWarning(true)}
            />
            <Image
              classImage="iconTask"
              srcImage={CancelIcon}
              alternateTextImage="cancel"
              title="cancel"
              onClick={onCancel}
            />
          </IconContainer>
          {viewDeleteWarnig === true ? (
            <Warning>
              <p>Are you sure you want to delete the task?</p>
              <button onClick={handlerRemove}>Yes</button>
              <button onClick={() => setViewDeleteWarning(false)}>No</button>
            </Warning>
          ) : null}
          <TaskHeader>
            <Image
              classImage="iconSingle"
              srcImage={TickIcon}
              alternateTextImage="task"
              title="title"
            />
            <H2>{task.title}</H2>
          </TaskHeader>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={ClockIcon}
              alternateTextImage="time"
              title="time"
            />
            {task.start && task.end ? (
              <P>
                <Date start={task.start} end={task.end} />
              </P>
            ) : (
              "--:--"
            )}
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={StatusIcon}
              alternateTextImage="status"
              title="status"
            />
            <P>{task.status || <i>no status</i>}</P>
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
            <P>{task.priority || <i>no priority</i>}</P>
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
            <P>{task.type || <i>no type</i>}</P>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={TagIcon}
              alternateTextImage="tags"
              title="tags"
            />
            <TagsContainer>
              {tags ? (
                tags.map(elem => (
                  <Tag key={elem} href="">
                    {elem}
                  </Tag>
                ))
              ) : (
                <Tag>
                  <i>no tags</i>
                </Tag>
              )}
            </TagsContainer>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={DescriptionIcon}
              alternateTextImage="description"
              title="description"
            />
            <P>{task.description || <i>no description</i>}</P>
          </TaskProperties>
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={ProjectIcon}
              alternateTextImage="project"
              title="project"
            />
            <P>{task.project || <i>no project</i>}</P>
          </TaskProperties>
        </Container>
      </Rnd>
    </Background>
  );
}

export default TaskInformation;
