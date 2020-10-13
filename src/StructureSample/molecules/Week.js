// Data range
//all days for the week
import React from "react";
import DateHeader from "../atoms/DateHeader";
import Day from "./Day";

function Week({ style, text }) {
  return (
    <div style={style}>
      <DateHeader />
      <div>
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  );
}

export default Week;
