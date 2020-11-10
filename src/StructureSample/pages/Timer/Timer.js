import React from "react";
import TimerCurrent from "./TimerCurrent";
import { Main, Header } from "./TimerStyled";

function Timer() {
  return (
    <Main>
      <Header>Current task</Header>
      <TimerCurrent />
    </Main>
  );
}

export default Timer;
