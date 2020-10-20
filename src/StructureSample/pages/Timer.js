import React from "react";
import FilterS from "../molecules/FilterS";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import TimerCurrent from "./TimerCurrent";
import TimerWeek from "./TimerWeek";

const Header = styled.header`
  text-align: left;
  padding: 15px 20px 5px;
  background-color: var(--basic-white);
  font-size: 1.5rem;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const NewLink = styled(NavLink)`
  padding: 10px 10px;
  margin: 0 15px;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--gray-3);

  &:hover {
    color: var(--basic-green);
  }

  &:active {
    color: var(--basic-green);
  }
`;

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
