//FilterS
//ul li -> some tasks

import React from "react";
import { AsideTaskStyled } from "./AsideTaskStyled";

const AsideTask = ({ title }) => {
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

  return <AsideTaskStyled>{title}</AsideTaskStyled>;
};

export default AsideTask;
