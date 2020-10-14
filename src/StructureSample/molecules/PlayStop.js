import React from "react";
import Image from "../atoms/Image";
import PauseIcon from "../../img/PauseIcon.svg";
import PlayIcon from "../../img/PlayIcon.svg";
import StopIcon from "../../img/StopIcon.svg";

const PlayStop = ({
  classContainer,
  classButton,
  classIcon,
  onClickHandler,
}) => {
  return (
    <div className={classContainer}>
      <button className={classButton} onClick={onClickHandler}>
        <Image
          srcImage={PlayIcon}
          classImage={classIcon}
          alternateTextImage="PlayIcon"
        />
      </button>
      <button className={classButton} onClick={onClickHandler}>
        <Image
          srcImage={StopIcon}
          classImage={classIcon}
          alternateTextImage="StopIcon"
        />
      </button>
      <button className={classButton} onClick={onClickHandler}>
        <Image
          srcImage={PauseIcon}
          classImage={classIcon}
          alternateTextImage="PauseIcon"
        />
      </button>
    </div>
  );
};

export default PlayStop;
