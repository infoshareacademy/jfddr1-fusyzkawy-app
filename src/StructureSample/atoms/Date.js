import React from "react";

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
//OUTPUT DATE version1:  1 November 00:00 - 6 November 00:00
//OUTPUT DATE version2:  Tuesday, 12 October 14:00 -21:00

function Date({ start, end }) {
  return (
    <>
      {start.toLocaleDateString() === end.toLocaleDateString() ? (
        <>
          {week[start.getDay()]}, {start.getDate()} {year[start.getMonth()]}
          {"  "}
          {start.toLocaleTimeString("PL-PL", {
            hour: "numeric",
            minute: "numeric",
          })}{" "}
          -
          {end.toLocaleTimeString("PL-PL", {
            hour: "numeric",
            minute: "numeric",
          })}
        </>
      ) : (
        <>
          {start.getDate()} {year[start.getMonth()]}
          {"  "}
          {start.toLocaleTimeString("PL-PL", {
            hour: "numeric",
            minute: "numeric",
          })}{" "}
          - {end.getDate()} {year[end.getMonth()]}
          {"  "}
          {end.toLocaleTimeString("PL-PL", {
            hour: "numeric",
            minute: "numeric",
          })}
        </>
      )}
    </>
  );
}

export default Date;
