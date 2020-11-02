//Task name // Run Time -> click on this shows acordeon with
//PlayStop.js

import React, { useContext } from "react";
import { AsideTimerStyled, AsideTimerTitle } from "./AsideTimerStyled";
import AsideTimerTask from "./AsideTimerTask/AsideTimerTask";
import { UserData } from "../../../../contexts/UserData";

const AsideTimer = () => {
  const { userTasks } = useContext(UserData);
  const activeTasks = userTasks.filter(task => task.active !== "stop");
  return (
    <AsideTimerStyled>
      <AsideTimerTitle>Timer current</AsideTimerTitle>
      {activeTasks.map(task => {
        return <AsideTimerTask task={task} />;
      })}
    </AsideTimerStyled>
  );
};

export default AsideTimer;
