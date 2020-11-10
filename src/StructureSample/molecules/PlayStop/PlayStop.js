import React, { useContext, useState, useEffect } from "react";
import { Button, ButtonsContainer, Div } from "./PlayStopStyled";
import { changeTask } from "../../../Firebase/firestore/tasksActions";
import { UserData } from "../../../contexts/UserData";
import PlayIcon from "./PlayIcon";
import StopIcon from "./StopIcon";
import PauseIcon from "./PauseIcon";

const PlayStop = ({ classIcon, task, showTime }) => {
  const { userUid, clearToast, displayToast } = useContext(UserData);

  function handleClick(e) {
    const clickedButton = e.currentTarget.id;
    const changedData = { active: clickedButton, duration: seconds };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  const [seconds, setSeconds] = useState(task.duration || 0);
  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(true);
  }
  function pause() {
    setIsActive(false);
  }
  function stop() {
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      // debugger;
      return clearInterval(interval);
    };
  }, [isActive, seconds]);

  return (
    <ButtonsContainer>
      <Button
        onClick={event => {
          handleClick(event);
          start();
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
        onClick={event => {
          handleClick(event);
          stop();
        }}
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
      <Button
        onClick={event => {
          handleClick(event);
          pause();
        }}
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
      {showTime && <Div className="time">{seconds}s</Div>}
    </ButtonsContainer>
  );
};

export default PlayStop;
