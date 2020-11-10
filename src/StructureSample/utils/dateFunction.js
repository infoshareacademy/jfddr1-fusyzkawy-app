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

//INPUT:  2020 10 19 00 00 00
//OUTPUT: Tue Oct 20 2020 00:00:00 GMT+0200 (Central European Summer Time)
export function stringDateToDateFormat(userTasks) {
  return userTasks.map(elem => {
    if (typeof elem.start === "string") {
      elem = { ...elem };
      elem.start = new Date(
        ...elem.start.split(" ").map(elem => parseInt(elem))
      );
      elem.start.setMonth(elem.start.getMonth() - 1);
      elem.end = new Date(...elem.end.split(" ").map(elem => parseInt(elem)));
      elem.end.setMonth(elem.end.getMonth() - 1);
    }
    return elem;
  });
}

//INPUT:{
//     end: Date Tue Nov 03 2020 00:00:00 GMT+0100 (Central European Standard Time)
//     start: Date Sun Nov 01 2020 00:00:00 GMT+0100 (Central European Standard Time)
//     }
//OUTPUT: {
//     endDate: "2020-11-6"​
//     endTime: "23:59"
//     startDate: "2020-11-5"
//     startTime: "00:00"
//     }
export function dateFormatToObjectForInputs(range) {
  const obj = {
    startTime: range.start.toLocaleTimeString("PL-PL", {
      hour: "numeric",
      minute: "numeric",
    }),
    startDate: `${range.start.getFullYear()}-${
      range.start.getMonth() + 1
    }-${range.start.getDate()}`,
    endTime:
      range.end.toLocaleTimeString("PL-PL", {
        hour: "numeric",
        minute: "numeric",
      }) === "00:00"
        ? "23:59"
        : range.end.toLocaleTimeString("PL-PL", {
            hour: "numeric",
            minute: "numeric",
          }),
    endDate: `${range.end.getFullYear()}-${
      range.end.getMonth() + 1
    }-${range.end.getDate()}`,
  };
  return obj;
}

//INPUT: {
//     endDate: "2020-11-9"
//     endTime: "24:00"
//     startDate: "2020-11-8"​
//     startTime: "00:00"
//    }
//OUTPUT: {
//     end: "2020 11 9 24 00 00"
//     start: "2020 11 4 00 00 00"
//     }
export function inputFormToStringDateForm(taskDate) {
  let obj = {};
  if (
    taskDate.startDate !== "" &&
    taskDate.startTime !== "" &&
    taskDate.endDate !== "" &&
    taskDate.endTime !== ""
  ) {
    obj = {
      start: `${taskDate.startDate
        .split("-")
        .join(" ")} ${taskDate.startTime.split(":").join(" ")} 00`,
      end: `${taskDate.endDate.split("-").join(" ")} ${taskDate.endTime
        .split(":")
        .join(" ")} 00`,
    };
  }
  return obj;
}

//INPUT: {
//       end: Date Fri Nov 13 2020 00:00:00 GMT+0100 (Central European Standard Time)
//       start: Date Mon Nov 02 2020 00:00:00 GMT+0100 (Central European Standard Time)
//      }
//OUTPUT: {
//     endDate: "2020-11-90"
//     endTime: "00:00"
//     startDate: "2020-11-80"​
//     startTime: "00:00"
//    }
export function dateFormatToObjectForInputsWithZero(task) {
  return {
    startTime: task.start.toLocaleTimeString("PL-PL", {
      hour: "numeric",
      minute: "numeric",
    }),
    startDate: `${task.start.getFullYear()}-${(
      "0" +
      (task.start.getMonth() + 1)
    ).slice(-2)}-${("0" + task.start.getDate()).slice(-2)}`,
    endTime: task.end.toLocaleTimeString("PL-PL", {
      hour: "numeric",
      minute: "numeric",
    }),
    endDate: `${task.end.getFullYear()}-${(
      "0" +
      (task.end.getMonth() + 1)
    ).slice(-2)}-${("0" + task.end.getDate()).slice(-2)}`,
  };
}

//INPUT DATE: start: Date Mon Oct 19 2020 00:00:00 GMT+0200 (Central European Summer Time)
//            end: Date Mon Oct 19 2020 00:00:00 GMT+0200 (Central European Summer Time)
//OUTPUT DATE version1:  1 November 00:00 - 6 November 00:00
//            version2:  Tuesday, 12 October 14:00 - 21:00
export function dateFormatToDisplayVersion(start, end) {
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
          -{" "}
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

//INPUT DATE: start: Date Mon Oct 19 2020 00:00:00 GMT+0200 (Central European Summer Time)
//            end: Date Mon Oct 19 2020 00:00:00 GMT+0200 (Central European Summer Time)
//OUTPUT DATE version1:  Firday, 5 November 02:00-06:00
//            version2:  From: Firday, 5 November 02:00
//                       To: Saturday, 6 November 10:00
export function dateFormatToAsideFormatToDisplay(start, end) {
  return (
    <>
      {start.toLocaleDateString() === end.toLocaleDateString() ? (
        <>
          {" "}
          <p>
            {week[start.getDay()]}, {start.getDate()} {year[start.getMonth()]}
          </p>{" "}
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
            {year[start.getMonth()]}{" "}
            {start.toLocaleTimeString("PL-PL", {
              hour: "numeric",
              minute: "numeric",
            })}
          </p>{" "}
          <p>
            To: {week[end.getDay()]}, {end.getDate()} {year[end.getMonth()]}{" "}
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

// start = "2020 10 20 00 00 00";
// ("2020 10 20 00 00 00");
// dateArray = start.split(" ");
// Array(6)[("2020", "10", "20", "00", "00", "00")];

// dateArray.slice(0, 3).join("-");
// ("2020-10-20");

//INPUT DATE: start: "2020 10 20 00 00 00"
//OUTPUT DATE "2020-10-20"
export function stringDateToStringWithDash(time) {
  const date = time.length < 8 ? "" : time.split(" ").slice(0, 3).join("-");
  return date;
}
