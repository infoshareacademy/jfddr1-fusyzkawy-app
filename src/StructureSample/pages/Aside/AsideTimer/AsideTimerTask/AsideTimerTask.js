import React, { useState } from "react";
import {
  PrettyTask,
  AsidePlayStopContainer,
  PickedTask,
} from "./AsideTimerTaskStyled";
import PlayStop from "../../../../molecules/PlayStop/PlayStop";

const AsideTimerTask = ({ task }) => {
  const [taskPicked, setTaskPicked] = useState(false);
  return (
    <>
      {taskPicked ? (
        <>
          <PickedTask
            onClick={() => setTaskPicked(!taskPicked)}
          >{`→${task.title}`}</PickedTask>
          <AsidePlayStopContainer>
            <PlayStop task={task} showTime={true} />
          </AsidePlayStopContainer>
        </>
      ) : (
        <PrettyTask
          onClick={() => setTaskPicked(!taskPicked)}
        >{`→${task.title}`}</PrettyTask>
      )}
    </>
  );
};

export default AsideTimerTask;
