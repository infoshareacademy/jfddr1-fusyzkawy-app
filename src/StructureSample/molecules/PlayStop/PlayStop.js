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

  function handleClick(e) {
    const clickedButton = e.currentTarget.id;
    const changedData = { active: clickedButton };
    changeTask(task.taskId, userUid, changedData, clearToast, displayToast);
  }

  return (
    <ButtonsContainer>
      <Button onClick={handleClick} id="play">
        <Image
          srcImage={PlayIcon}
          classImage={classIcon}
          alternateTextImage="PlayIcon"
        />
      </Button>
      <Button onClick={handleClick} id="stop">
        <Image
          srcImage={StopIcon}
          classImage={classIcon}
          alternateTextImage="StopIcon"
        />
      </Button>
      <Button onClick={handleClick} id="pause">
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
