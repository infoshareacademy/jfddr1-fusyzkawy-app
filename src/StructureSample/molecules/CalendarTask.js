import React from "react";
import styled from "styled-components";

const Task = styled.div`
  border-radius: 5px;
  width: 200px;
  margin: 15px;
  padding: 5px;
  padding-left: 15px;
  text-align: left;
`;

function CalendarTask({ task }) {
  const taskHeight = (task.endHour - task.startHour) * 20;
  return (
    <>
      <Task
        className={"calendarTask"}
        style={{
          height: `${taskHeight}px`,
          borderLeft: `5px solid var(--task-${task.color}-dark)`,
          backgroundColor: `var(--task-${task.color}-light)`,
        }}
      >
        <p>{task.title}</p>
        <p>
          {task.startHour}-{task.endHour}
        </p>
      </Task>
    </>
  );
}

export default CalendarTask;
