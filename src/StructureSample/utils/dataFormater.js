import React from "react";

// HELPER VARIABLES
const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const year = [
  "January",
  "February",
  "March",
  "April",
  "May ",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//INPUT DATE: Date Mon Oct 19 2020 00:00:00 GMT+0200 (Central European Summer Time)
//OUTPUT DATE version1:  Firday, 5 November 02:00-06:00
//OUTPUT DATE version2:  From: Firday, 5 November 02:00
//                       To: Saturday, 6 November 10:00

function DateFormater({ start, end }) {
  return (
    <>
      {start.toLocaleDateString() === end.toLocaleDateString() ? (
        <>
          {" "}
          <p>
            {week[start.getDay()]}, {start.getDate()} {year[start.getMonth()]}
          </p>
          <p>
            {start.toLocaleTimeString("PL-PL", {
              hour: "numeric",
              minute: "numeric",
            })}{" "}
            -
            {end.toLocaleTimeString("PL-PL", {
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </>
      ) : (
        <>
          <p>
            From: {week[start.getDay()]}, {start.getDate()}{" "}
            {year[start.getMonth()]}
            {start.toLocaleTimeString("PL-PL", {
              hour: "numeric",
              minute: "numeric",
            })}{" "}
          </p>
          <p>
            To: {week[end.getDay()]}, {end.getDate()} {year[end.getMonth()]}
            {end.toLocaleTimeString("PL-PL", {
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </>
      )}
    </>
  );
}

export default DateFormater;
