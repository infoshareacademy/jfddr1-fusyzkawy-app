//Header: "task description" + "Mon(15th) Tue(16th) Wed(17th) ...."

import React from "react";
import "../styleAnia.css";

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function DateHeader({ incommingDate, isDateVisible }) {
  const date = new Date(incommingDate);
  //   console.log(date.getDate(), date.getDay());
  const zmienna = (date.getDay() + 6) % 7;
  const currentDay = date.getDate() - zmienna;

  // unworking for biggining & ending month
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays[i] = currentDay + i;
  }
  return (
    <div className="displayFLexRow">
      {weekDays.map((elem, index) => (
        <div className="margin widthProcent12">
          <p className="underline">{week[index]}</p>
          {isDateVisible && <p>{elem} th</p>}
        </div>
      ))}
    </div>
  );
}

export default DateHeader;
