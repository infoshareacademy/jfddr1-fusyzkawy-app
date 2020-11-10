//INPUT:2020 10 19 00 00 00
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
//     endTime: "24:00"
//     startDate: "2020-11-5"
//     startTime: "00:00"
//     }
export function dateFormatToObjectForInputs(range) {
  return {
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
        ? "24:00"
        : range.end.toLocaleTimeString("PL-PL", {
            hour: "numeric",
            minute: "numeric",
          }),
    endDate: `${range.end.getFullYear()}-${
      range.end.getMonth() + 1
    }-${range.end.getDate()}`,
  };
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

export function inputFormToStringDateForm(objDate) {
  return {
    start: `${objDate.startDate.split("-").join(" ")} ${objDate.startTime
      .split(":")
      .join(" ")} 00`,
    end: `${objDate.endDate.split("-").join(" ")} ${objDate.endTime
      .split(":")
      .join(" ")} 00`,
  };
}
