import React from "react";
import Image from "../../atoms/Image";
import {
  TaskProperties,
  TagsContainer,
  Tag,
  H2,
  P,
} from "./TaskInformationStyled";
import {
  dateFormatToDisplayVersion,
  sekundsToHHMMSS,
} from "../../utils/dateFunction";

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
        <P>
          {(task.start &&
            task.end &&
            dateFormatToDisplayVersion(task.start, task.end)) || <i>no time</i>}
        </P>
      ) : infoType === "p" ? (
        <P>{task[infoName] || <i>no {infoName}</i>}</P>
      ) : infoType === "duration" ? (
        <P>
          {sekundsToHHMMSS(
            task.active !== "play"
              ? task.duration
              : task.duration !== 0
              ? task.duration + Math.floor((Date.now() - task.timeStart) / 1000)
              : 0
          ) || <i>no {infoName}</i>}
        </P>
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
