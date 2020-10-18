import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import StartPageNav from "./StartPageNav";
import { PageWrapper } from "../../StyledComponents/StyledStartPage";

const StartPage = () => {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <StartPageNav />
          </Route>
        </Switch>
      </PageWrapper>
    </BrowserRouter>
  );
};

export default StartPage;
