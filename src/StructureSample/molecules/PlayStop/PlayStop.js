import React, { useContext } from "react";
import Image from "../../atoms/Image";
import PauseIcon from "../../../img/PauseIcon.svg";
import PlayIcon from "../../../img/PlayIcon.svg";
import StopIcon from "../../../img/StopIcon.svg";
import { Button, ButtonsContainer } from "./PlayStopStyled";
import { changeTask } from "../../../Firebase/firestore/tasksActions";
import { UserData } from "../../../contexts/UserData";

const PlayStop = ({ classIcon, task }) => {
  const { userUid, clearToast, displayToast } = useContext(UserData);
  // const [changedData, setChangedData] = useState({});

  function handlePlayClick() {
    const changedData = { active: "play" };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  function handlePauseClick() {
    const changedData = { active: "pause" };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  function handleStopClick() {
    const changedData = { active: "stop" };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  return (
    <ButtonsContainer>
      <Button onClick={handlePlayClick}>
        <Image
          srcImage={PlayIcon}
          classImage={classIcon}
          alternateTextImage="PlayIcon"
        />
      </Button>
      <Button onClick={handleStopClick}>
        <Image
          srcImage={StopIcon}
          classImage={classIcon}
          alternateTextImage="StopIcon"
        />
      </Button>
      <Button onClick={handlePauseClick}>
        <Image
          srcImage={PauseIcon}
          classImage={classIcon}
          alternateTextImage="PauseIcon"
        />
      </Button>
    </ButtonsContainer>
  );
};

export default PlayStop;
