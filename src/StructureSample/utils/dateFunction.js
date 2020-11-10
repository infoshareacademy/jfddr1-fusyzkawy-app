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

//INPUT:Wed Nov 11 2020 00:00:00 GMT+0100 (Central European Standard Time)
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
