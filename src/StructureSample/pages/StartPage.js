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
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default StartPage;
