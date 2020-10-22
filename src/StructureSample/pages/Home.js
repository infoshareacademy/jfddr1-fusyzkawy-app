import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Calendar from "./Calendar/Calendar";
import Tasks from "./Tasks";
import Timer from "./Timer/Timer";
import Users from "./Users";
import Nav from "./Nav";
import Aside from "./Aside";
import { allTasks } from "../../test_variables";
import NoMatch2 from "./NoMatch2";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="home">
        <Nav />
        <Aside />
        <Switch>
          <Route exact path="/jfddr1-fusyzkawy-app/users/">
            <Users />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/calendar/">
            <Calendar />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/timer/:current">
            <Timer tasks={allTasks} />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/tasks/">
            <Tasks />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app">
            <Tasks />
          </Route>
          <Route path="/jfddr1-fusyzkawy-app/*">
            <NoMatch2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Home;
