import React from "react";
import FilterS from "../../molecules/FilterS";
import { Route } from "react-router-dom";
import TimerCurrent from "./TimerCurrent";
import TimerWeek from "./TimerWeek";
import { Header, Navigation, NewLink } from "./TimerStyled";

function Timer({ tasks }) {
  return (
    <div className="mainHome">
      <Header>
        <h2>Timer</h2>
        <Navigation>
          <FilterS />
          <NewLink
            activeClassName="activeLink"
            to={`/jfddr1-fusyzkawy-app/timer/current`}
          >
            Current
          </NewLink>
          <NewLink
            activeClassName="activeLink"
            to={`/jfddr1-fusyzkawy-app/timer/week`}
          >
            Week
          </NewLink>
        </Navigation>
      </Header>
      <Route path="/jfddr1-fusyzkawy-app/timer/current">
        <TimerCurrent tasks={tasks} />
      </Route>
      <Route path="/jfddr1-fusyzkawy-app/timer/week">
        <TimerWeek tasks={tasks} />
      </Route>
    </div>
  );
}

export default Timer;
