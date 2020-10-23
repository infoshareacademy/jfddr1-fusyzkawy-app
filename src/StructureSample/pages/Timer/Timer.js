import React, { useState, useEffect, useContext } from "react";
import FilterS from "../../molecules/FilterS";
import { Route } from "react-router-dom";
import TimerCurrent from "./TimerCurrent";
import TimerWeek from "./TimerWeek";
import { Header, Navigation, NewLink } from "./TimerStyled";
import { UserData } from "../../../contexts/UserData";

function Timer() {
  const { userTasks } = useContext(UserData);
  const [reformattedData, setReformattedData] = useState([]);

  useEffect(() => {
    userTasks !== [] &&
      setReformattedData(
        userTasks.map(elem => {
          if (typeof elem.start === "string") {
            elem = { ...elem };
            elem.start = new Date(
              ...elem.start.split(" ").map(elem => parseInt(elem))
            );
            elem.start.setMonth(elem.start.getMonth() - 1);
            elem.end = new Date(
              ...elem.end.split(" ").map(elem => parseInt(elem))
            );
            elem.end.setMonth(elem.end.getMonth() - 1);
          }
          return elem;
        })
      );
  }, [userTasks]);

  console.log(userTasks);
  console.log(reformattedData);
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
        <TimerCurrent tasks={reformattedData} />
      </Route>
      <Route path="/jfddr1-fusyzkawy-app/timer/week">
        <TimerWeek tasks={reformattedData} />
      </Route>
    </div>
  );
}

export default Timer;
