import React from "react";
import Image from "../../atoms/Image";
import PauseIcon from "../../../img/PauseIcon.svg";
import PlayIcon from "../../../img/PlayIcon.svg";
import StopIcon from "../../../img/StopIcon.svg";
import { Button, ButtonsContainer } from "./PlayStopStyled";

const PlayStop = ({ classIcon, onClickHandler }) => {
  return (
    <ButtonsContainer>
      <Button onClick={onClickHandler}>
        <Image
          srcImage={PlayIcon}
          classImage={classIcon}
          alternateTextImage="PlayIcon"
        />
      </Button>
      <Button onClick={onClickHandler}>
        <Image
          srcImage={StopIcon}
          classImage={classIcon}
          alternateTextImage="StopIcon"
        />
      </Button>
      <Button onClick={onClickHandler}>
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
