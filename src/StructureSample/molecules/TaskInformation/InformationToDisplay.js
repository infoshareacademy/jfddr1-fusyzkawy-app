import React from "react";
import Date from "../../atoms/Date";
import Image from "../../atoms/Image";
import {
  TaskProperties,
  TagsContainer,
  Tag,
  H2,
  P,
} from "./TaskInformationStyled";

function InformationToDisplay({ task, iconName, infoName, infoType }) {
  const tags = task.tags?.split(" ");

  console.log(task, iconName, infoName, infoType);
  return (
    <TaskProperties>
      <Image
        classImage="iconSingle"
        srcImage={iconName}
        alternateTextImage={infoName}
        title={infoName}
      />

      {infoType === "h2" ? (
        <H2>{task[infoName]}</H2>
      ) : infoType === "date" ? (
        <P>
          <Date start={task.start} end={task.end} />
        </P>
      ) : infoType === "p" ? (
        <P>{task[infoName] || <i>no {infoName}</i>}</P>
      ) : infoType === "TagsContainer" ? (
        <TagsContainer>
          {tags ? (
            tags.map(elem => (
              <Tag key={elem} href="">
                {elem}
              </Tag>
            ))
          ) : (
            <Tag>
              <i>no {infoName}</i>
            </Tag>
          )}
        </TagsContainer>
      ) : null}
    </TaskProperties>
  );
}

export default InformationToDisplay;
