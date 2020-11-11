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
  const [timeStart, setTimeStart] = useState(task.timeStart || 0);
  const startTime = task.duration + Math.floor((Date.now() - timeStart) / 1000);
  const [seconds, setSeconds] = useState(
    task.active !== "play" ? task.duration : task.duration !== 0 ? startTime : 0
  );
  const [isActive, setIsActive] = useState(task.active === "play");

  function handlePauseStopClick(e) {
    setIsActive(false);
    const clickedButton = e.currentTarget.id;
    const changedData = { active: clickedButton, duration: seconds };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  function start(e) {
    setIsActive(true);
    const date = Date.now();
    setTimeStart(date);
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
    if (isActive) {
      interval = setInterval(() => {
        const time =
          task.duration + Math.floor((Date.now() - timeStart) / 1000);
        setSeconds(time);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      return clearInterval(interval);
    };
  }, [isActive, seconds, task.duration, timeStart]);

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
            task.active === "play"
              ? "var(--task-red-dark)"
              : "var(--extra-gray)"
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
            task.active === "pause"
              ? "var(--task-red-dark)"
              : "var(--extra-gray)"
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
            task.active === "stop"
              ? "var(--task-red-dark)"
              : "var(--extra-gray)"
          }`}
        />
      </Button>
      {showTime && <Div className="time">{sekundsToHHMMSS(seconds)}</Div>}
    </ButtonsContainer>
  );
};

export default PlayStop;
