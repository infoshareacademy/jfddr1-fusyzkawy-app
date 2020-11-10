import React from "react";
import TimerCurrent from "./TimerCurrent";
import { Header } from "./TimerStyled";

function Timer() {
  return (
    <div className="mainHome">
      <Header>
        <h2>Current task</h2>
      </Header>
      <TimerCurrent />
    </div>
  );
}

export default Timer;
