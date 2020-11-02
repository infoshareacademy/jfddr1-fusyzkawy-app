import React, { useContext } from "react";
import { Button, ButtonsContainer } from "./PlayStopStyled";
import { changeTask } from "../../../Firebase/firestore/tasksActions";
import { UserData } from "../../../contexts/UserData";
import PlayIcon from "./PlayIcon";
import StopIcon from "./StopIcon";
import PauseIcon from "./PauseIcon";

const PlayStop = ({ classIcon, task }) => {
  const { userUid, clearToast, displayToast } = useContext(UserData);

  function handleClick(e) {
    const clickedButton = e.currentTarget.id;
    const changedData = { active: clickedButton };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  return (
    <ButtonsContainer>
      <Button onClick={handleClick} id="play">
        <PlayIcon
          color={`${
            task.active === "play"
              ? "var(--task-red-dark)"
              : "var(--extra-gray)"
          }`}
        />
      </Button>
      <Button onClick={handleClick} id="stop">
        <StopIcon
          color={`${
            task.active === "stop"
              ? "var(--task-red-dark)"
              : "var(--extra-gray)"
          }`}
        />
      </Button>
      <Button onClick={handleClick} id="pause">
        <PauseIcon
          color={`${
            task.active === "pause"
              ? "var(--task-red-dark)"
              : "var(--extra-gray)"
          }`}
        />
      </Button>
    </ButtonsContainer>
  );
};

export default PlayStop;
