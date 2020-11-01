import React, { useState, useEffect, useContext } from "react";
import FilterS from "../../molecules/FilterS/FilterS";
import { Route } from "react-router-dom";
import TimerCurrent from "./TimerCurrent";
import TimerWeek from "./TimerWeek";
import { Header, Navigation, NewLink } from "./TimerStyled";
import { UserData } from "../../../contexts/UserData";
import FilterIcon from "../../../img/filter-icon.svg";

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

  return (
    <div className="mainHome">
      <Header>
        <h2>Timer</h2>
        <Navigation>
          <FilterS viewTasks={false} icon={FilterIcon} />
          <NewLink activeClassName="activeLink" to={`/timer/current`}>
            Current
          </NewLink>
          <NewLink activeClassName="activeLink" to={`/timer/week`}>
            Week
          </NewLink>
        </Navigation>
      </Header>
      <Route path="/timer/current">
        <TimerCurrent tasks={reformattedData} />
      </Route>
      <Route path="/timer/week">
        <TimerWeek tasks={reformattedData} />
      </Route>
    </div>
  );
}

export default Timer;
