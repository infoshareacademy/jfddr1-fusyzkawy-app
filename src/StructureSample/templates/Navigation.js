//button for create task
//4xTabs-> buttons
//Image -> person avatar
//Username
//Button -> open UserInformation.js
import React from "react";
import Button from "../atoms/Button";
import UserInformation from "../molecules/UserInformation";

function Navigation({ style, text, url }) {
  return (
    <div style={style}>
      <Button />
      <nav>
        <a href={url}>Tasks</a>
        <a href={url}>Timer</a>
        <a href={url}>Calendar</a>
        <a href={url}>Users</a>
      </nav>
      <UserInformation />
    </div>
  );
}

export default Navigation;
