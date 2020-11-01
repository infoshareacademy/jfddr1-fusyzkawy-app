//FilterS
//ul li -> some tasks

import React, { useState } from "react";
import {
  AsideTaskStyled,
  HoverEffect,
  MoreInfo,
  PickedTask,
} from "./AsideTaskStyled";
import Date from "../../../atoms/Date";
const AsideTask = ({ asideTask }) => {
  // Single Task's Data

  // const Task = {
  //   title: "",
  //   type: "",
  //   description: "",
  //   start: "",
  //   end: "",
  //   status: "",
  //   priority: "",
  //   project: "",
  // };

  const clickHandler = () => {
    setClickedMoreInfo(!clickedMoreInfo);
  };

  const [clickedMoreInfo, setClickedMoreInfo] = useState(false);

  return (
    <HoverEffect>
      <AsideTaskStyled onClick={clickHandler}>
        {clickedMoreInfo ? (
          <>
            <PickedTask>{asideTask.title}</PickedTask>
            <MoreInfo>
              <p>Type: {asideTask.type}</p>
              <p>Description: {asideTask.description}</p>
              <p>Duration:</p>
              <Date start={asideTask.start} end={asideTask.end} />
              <p>Priority: {asideTask.priority}</p>
              <p>Project: {asideTask.project}</p>
            </MoreInfo>
          </>
        ) : (
          asideTask.title
        )}

        {/* {asideTask.title}
        {clickedMoreInfo && (
          <MoreInfo>
            <p>Type: {asideTask.type}</p>
            <p>Description: {asideTask.description}</p>
            <p>Duration:</p>
            <Date start={asideTask.start} end={asideTask.end} />
            <p>Priority: {asideTask.priority}</p>
            <p>Project: {asideTask.project}</p>
          </MoreInfo>
        )} */}
      </AsideTaskStyled>
    </HoverEffect>
  );
};

export default AsideTask;
