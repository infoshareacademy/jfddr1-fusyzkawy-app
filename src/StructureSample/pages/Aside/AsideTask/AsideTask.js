//FilterS
//ul li -> some tasks

import React, { useState } from "react";
import { AsideTaskStyled, HoverEffect, MoreInfo } from "./AsideTaskStyled";

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
        {asideTask.title}
        {clickedMoreInfo && (
          <MoreInfo>
            <p>Type: {asideTask.type}</p>
            <p>Description: {asideTask.description}</p>
            <p>Start: {asideTask.start}</p>
            <p>End: {asideTask.end}</p>
            <p>Priority: {asideTask.priority}</p>
            <p>Project: {asideTask.project}</p>
          </MoreInfo>
        )}
      </AsideTaskStyled>
    </HoverEffect>
  );
};

export default AsideTask;