import React from "react";
import DateHeader from "../atoms/DateHeader";

function Day({ day }) {
  return (
    <>
      <p className={"widthProcent12 height75"}> Day {day}</p>
    </>
  );
}

function Month({ date }) {
  const now = new Date(date);
  const numberOfDays = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  const emptyArray = [];

  for (let i = 0; i < numberOfDays; i++) {
    emptyArray[i] = <Day day={i + 1} />;
  }
  return (
    <>
      <DateHeader
        incommingDate={[2020, 10, 13]}
        isDateVisible={false}
        numberOfDay="7"
      />
      <div className={"displayFLexRow wrap"}>{emptyArray}</div>
    </>
  );
}

export default Month;
