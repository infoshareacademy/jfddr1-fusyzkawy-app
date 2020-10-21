import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NoMatch from "./NoMatch";
import StartPageNav from "./StartPageNav";
import { PageWrapper } from "../../StyledComponents/StyledStartPage";

const StartPage = () => {
  return (
    <BrowserRouter>
      <PageWrapper>
        <StartPageNav />
        <Switch>
          <Route exact path="/jfddr1-fusyzkawy-app/signin">
            <SignIn />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/signup">
            <SignUp />
          </Route>
          <Route path="/jfddr1-fusyzkawy-app/*">
            <NoMatch />
          </Route>
        </Switch>
      </PageWrapper>
    </BrowserRouter>
  );
};

export default StartPage;
