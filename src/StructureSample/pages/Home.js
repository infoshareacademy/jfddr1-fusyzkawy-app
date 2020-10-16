import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Calendar from "./Calendar";
import Tasks from "./Tasks";
import Timer from "./Timer";
import Users from "./Users";
import Nav from "./Nav";
import Aside from "./Aside";

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
            <Calendar />
          </Route>
          <Route path="/timer">
            <Timer />
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
