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
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/calendar">
            <Calendar dateCalendar={inputDate} />
          </Route>
          <Route path="/timer">
            <Timer tasks={allTasks} />
          </Route>
          <Route exact path="/">
            <Tasks />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Home;
