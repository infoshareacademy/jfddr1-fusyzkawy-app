import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NoMatch from "./NoMatch";
import StartPageNav from "./StartPageNav";
import { PageWrapper } from "../../StyledComponents/StyledStartPage";
import { UserData } from "../../contexts/UserData";
import ToastFirebase from "../molecules/ToastFirebase/ToastFirebase";
const StartPage = () => {
  const { toastData } = useContext(UserData);
  return (
    <BrowserRouter>
      <PageWrapper>
        <StartPageNav />
        <Switch>
          <Route exact path="/jfddr1-fusyzkawy-app/signin/">
            <SignIn />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/signup/">
            <SignUp />
          </Route>
          <Route exact path="/jfddr1-fusyzkawy-app/">
            <SignIn />
          </Route>
          <Route path="/jfddr1-fusyzkawy-app/*">
            <NoMatch />
          </Route>
        </Switch>
        <ToastFirebase
          active={toastData.active}
          show={toastData.show}
          text={toastData.text}
          success={toastData.success}
        />
      </PageWrapper>
    </BrowserRouter>
  );
};

export default StartPage;
