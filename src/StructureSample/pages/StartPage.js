import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import StartPageNav from "./StartPageNav";

const StartPage = () => {
  return (
    <BrowserRouter>
      <h1>Start Page</h1>
      <nav>
        <StartPageNav />
      </nav>
      <Switch>
        <Route path="/jfddr1-fusyzkawy-app/signin">
          <SignIn />
        </Route>
        <Route path="/jfddr1-fusyzkawy-app/signup">
          <SignUp />
        </Route>
        <Route path="/jfddr1-fusyzkawy-app/">
          <p>ERROR. Weź nie świruj</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default StartPage;
