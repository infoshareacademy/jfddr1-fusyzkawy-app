import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Tasks from "./Tasks";
import Timer from "./Timer/Timer";
// import Users from "./Users";
import Nav from "./Nav/Nav";
import Aside from "./Aside/Aside";
import NoMatch2 from "./NoMatch/NoMatch2";
import { UserData } from "../../contexts/UserData";
import ToastFirebase from "../molecules/ToastFirebase/ToastFirebase";

const Home = () => {
  const { toastData } = useContext(UserData);
  return (
    <BrowserRouter basename="/jfddr1-fusyzkawy-app">
      <div className="home">
        <Nav />
        <Aside />
        <Switch>
          {/* <Route exact path="/jfddr1-fusyzkawy-app/users/">
            <Users />
          </Route> */}
          <Route exact path="/calendar/">
            <Calendar />
          </Route>
          <Route exact path="/timer/:current">
            <Timer />
          </Route>
          <Route exact path="/tasks/">
            <Tasks />
          </Route>
          <Route exact path="/">
            <Tasks />
          </Route>
          <Route path="/*">
            <NoMatch2 />
          </Route>
        </Switch>
        <ToastFirebase
          active={toastData.active}
          show={toastData.show}
          text={toastData.text}
          success={toastData.success}
        />
      </div>
    </BrowserRouter>
  );
};

export default Home;
