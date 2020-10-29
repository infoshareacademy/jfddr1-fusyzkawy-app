import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../SignPage/SignIn";
import SignUp from "../SignPage/SignUp";
import NoMatch from "../NoMatch/NoMatch";
import StartPageNav from "../StartPageNav";
import { PageWrapper } from "./StartPageStyled";
import { UserData } from "../../../contexts/UserData";
import ToastFirebase from "../../molecules/ToastFirebase/ToastFirebase";
import Farewell from "../NoMatch/Farewell";
const StartPage = () => {
  const { toastData } = useContext(UserData);
  return (
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
        <Route exact path="/jfddr1-fusyzkawy-app/farewell/">
          <Farewell />
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
  );
};

export default StartPage;
