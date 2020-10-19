import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Calendar from "./Calendar";
import Tasks from "./Tasks";
import Timer from "./Timer";
import Users from "./Users";
import Nav from "./Nav";
import Aside from "./Aside";
import { allTasks, inputDate } from "../../test_variables";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="home">
        <Nav />
        <Aside />
        <Switch>
          <Route exact path="/jfddr1-fusyzkawy-app/users">
            <Users />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/calendar">
            <Calendar dateCalendar={inputDate} />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/timer/current">
            <Timer tasks={allTasks} />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/tasks">
            <Tasks />
          </Route>
          <Route path="/jfddr1-fusyzkawy-app/*">
            <p>ERROR. Weź nie świruj</p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Home;
