import React from "react";
import Image from "../../atoms/Image";
import {
  TaskProperties,
  TagsContainer,
  Tag,
  H2,
  P,
} from "./TaskInformationStyled";
import { dateFormatToDisplayVersion } from "../../utils/dateFunction";

function InformationToDisplay({ task, iconName, infoName, infoType }) {
  const tags = task.tags?.split(" ");

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
        <P>{dateFormatToDisplayVersion(task.start, task.end)}</P>
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
