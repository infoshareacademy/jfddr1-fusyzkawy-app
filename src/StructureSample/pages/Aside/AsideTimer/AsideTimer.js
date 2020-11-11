//Task name // Run Time -> click on this shows acordeon with
//PlayStop.js

import React, { useContext } from "react";
import {
  AsideTimerStyled,
  AsideTimerTitle,
  AsideNoTasks,
} from "./AsideTimerStyled";
import AsideTimerTask from "./AsideTimerTask/AsideTimerTask";
import { UserData } from "../../../../contexts/UserData";

const AsideTimer = () => {
  const { userTasks } = useContext(UserData);
  const activeTasks = userTasks.filter(task => task.active !== "stop");
  return (
    <AsideTimerStyled>
      <AsideTimerTitle>Timer current</AsideTimerTitle>
      {activeTasks.length !== 0 ? (
        activeTasks.map(task => {
          return <AsideTimerTask key={task.taskId} task={task} />;
        })
      ) : (
        <AsideNoTasks>No active tasks, go 'n get some.</AsideNoTasks>
      )}
    </AsideTimerStyled>
  );
};

export default AsideTimer;
