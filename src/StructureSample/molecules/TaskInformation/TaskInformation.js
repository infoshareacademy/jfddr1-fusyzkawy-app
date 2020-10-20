import React, { useRef, useState } from "react";
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
//Components
import RadioInput from "../../atoms/RadioInput";
import { options } from "../../../test_variables";
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
} from "./TaskInformationStyled";

function TaskInformation({ task, onCancel }) {
  const [status, setStatus] = useState(task.status);
  const [viewStatusOption, setViewStatusOption] = useState(false);
  const backgroundEl = useRef(null); // use to close Container with Task Information by click on <Background>
  const tags = task.tags?.split(" ");
  const generalStyle = { margin: "10px 5px" };

  function handlerOnClick(event) {
    setStatus(event.target.value);
    setViewStatusOption(false);
  }

  return (
    <Background
      ref={backgroundEl} // set backgroundEl on <Background>
      onClick={event => event.target === backgroundEl.current && onCancel()}
    >
      <Container color={task.color || "gray"}>
        <IconContainer>
          <Image
            classImage="iconTask"
            srcImage={EditIcon}
            alternateTextImage="edit"
          />
          <Image
            classImage="iconTask"
            srcImage={RemoveIcon}
            alternateTextImage="remove"
          />
          <Image
            classImage="iconTask"
            srcImage={CancelIcon}
            alternateTextImage="cancel"
            onClick={onCancel}
          />
        </IconContainer>
        <TaskHeader>
          <Image
            classImage="iconSingle"
            srcImage={TickIcon}
            alternateTextImage="task"
          />
          <h2 style={generalStyle}>{task.title}</h2>
        </TaskHeader>
        <TaskProperties>
          <Image
            classImage="iconSingle"
            srcImage={ClockIcon}
            alternateTextImage="time"
          />
          {task.start && task.end ? (
            <p style={generalStyle}>
              <Date start={task.start} end={task.end} />
            </p>
          ) : (
            "--:--"
          )}
        </TaskProperties>
        <TaskProperties>
          <Image
            classImage="iconSingle"
            srcImage={StatusIcon}
            alternateTextImage="status"
          />
          <div style={generalStyle}>
            <button onClick={() => setViewStatusOption(true)}>
              {status || options[0]}
            </button>
            {viewStatusOption === true ? (
              <RadioInput
                categories={options}
                name="status"
                onClickInput={handlerOnClick}
              />
            ) : null}
          </div>
        </TaskProperties>
        <PhotoContainer>
          <Image
            classImage="iconSingle"
            srcImage={UserIcon2}
            alternateTextImage="users"
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

        {tags && (
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={TagIcon}
              alternateTextImage="tags"
            />
            <TagsContainer>
              {tags.map(elem => (
                <Tag key={elem} href="">
                  {elem}
                </Tag>
              ))}
            </TagsContainer>
          </TaskProperties>
        )}

        {task.discription && (
          <TaskProperties>
            <Image
              classImage="iconSingle"
              srcImage={DescriptionIcon}
              alternateTextImage="description"
            />
            <p style={generalStyle}>{task.discription}</p>
          </TaskProperties>
        )}
      </Container>
    </Background>
  );
}

export default TaskInformation;
