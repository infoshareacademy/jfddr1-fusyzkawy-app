//color by tags
//color by priority
//data start

//Name of task
//hours range

//Header: "task description" + "Mon(15th) Tue(16th) Wed(17th) ...."

import React from "react";

function CalendarTask({ task }) {
  return (
    <>
      <div className={"calendarTask"}>
        <p>{task.title}</p>
        <p>
          {task.startHour}-{task.endHour}
        </p>
        <p>{task.description}</p>
      </div>
    </>
  );
}

export default CalendarTask;
