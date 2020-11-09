import React from "react";
import { PrettyTask } from "./AsideTimerTaskStyled";

const AsideTimerTask = ({ task }) => {
  return <PrettyTask>{`→${task.title}`}</PrettyTask>;
};

export default AsideTimerTask;
