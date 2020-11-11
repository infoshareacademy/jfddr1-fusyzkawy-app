import React, { useContext, useState, useEffect } from "react";
import { Button, ButtonsContainer, Div } from "./PlayStopStyled";
import { changeTask } from "../../../Firebase/firestore/tasksActions";
import { UserData } from "../../../contexts/UserData";
import PlayIcon from "./PlayIcon";
import StopIcon from "./StopIcon";
import PauseIcon from "./PauseIcon";
import { sekundsToHHMMSS } from "../../utils/dateFunction";

const PlayStop = ({ classIcon, task, showTime }) => {
  const { userUid, clearToast, displayToast } = useContext(UserData);
  const startTime =
    task.duration + Math.floor((Date.now() - task.timeStart) / 1000);
  const [seconds, setSeconds] = useState(
    task.active !== "play" ? task.duration : task.duration !== 0 ? startTime : 0
  );

  function handlePauseStopClick(e) {
    const clickedButton = e.currentTarget.id;
    const changedData = { active: clickedButton, duration: seconds };
    setSeconds(startTime);
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  function start(e) {
    const date = Date.now();
    setSeconds(task.duration);
    const clickedButton = e.currentTarget.id;
    const changedData = {
      active: clickedButton,
      timeStart: date,
    };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  useEffect(() => {
    let interval = null;
    if (task.active === "play") {
      interval = setInterval(() => {
        const time =
          task.duration + Math.floor((Date.now() - task.timeStart) / 1000);
        setSeconds(time);
      }, 1000);
    } else if (task.acive !== "play" && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      return clearInterval(interval);
    };
  }, [seconds, task.active]);

  return (
    <ButtonsContainer>
      <Button
        onClick={event => {
          start(event);
        }}
        id="play"
        disabled={task.active === "play" ? true : false}
      >
        <PlayIcon
          color={`${
            task.active === "play" ? "var(--basic-green)" : "var(--extra-gray)"
          }`}
        />
      </Button>
      <Button
        onClick={handlePauseStopClick}
        id="pause"
        disabled={task.active === "pause" ? true : false}
      >
        <PauseIcon
          color={`${
            task.active === "pause" ? "var(--basic-green)" : "var(--extra-gray)"
          }`}
        />
      </Button>
      <Button
        onClick={handlePauseStopClick}
        id="stop"
        disabled={task.active === "stop" ? true : false}
      >
        <StopIcon
          color={`${
            task.active === "stop" ? "var(--basic-green)" : "var(--extra-gray)"
          }`}
        />
      </Button>
      {showTime && <Div className="time">{sekundsToHHMMSS(seconds)}</Div>}
    </ButtonsContainer>
  );
};

export default PlayStop;
