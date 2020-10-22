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
