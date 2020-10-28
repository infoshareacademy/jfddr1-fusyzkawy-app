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
    <BrowserRouter>
      <div className="home">
        <Nav />
        <Aside />
        <Switch>
          {/* <Route exact path="/jfddr1-fusyzkawy-app/users/">
            <Users />
          </Route> */}
          <Route exact path="/jfddr1-fusyzkawy-app/calendar/">
            <Calendar />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/timer/:current">
            <Timer />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/tasks/">
            <Tasks />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/">
            <Tasks />
          </Route>
          <Route path="/jfddr1-fusyzkawy-app/*">
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
