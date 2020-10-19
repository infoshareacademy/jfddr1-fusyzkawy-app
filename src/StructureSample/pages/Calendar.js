import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import events from "../../event_test";
import styled from "styled-components";
import TaskInformation from "../molecules/TaskInformation";

const localizer = momentLocalizer(moment);

const Header = styled.header`
  text-align: left;
  padding: 15px 20px 5px;
  background-color: var(--basic-white);
  font-size: 1.5rem;
`;

// background-color: white;
// box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.15), 0 2px 6px 2px rgba(60, 64, 67, 0.05);
// position: relative;
// border: 1px solid #ddd;
// display: flex;
// flex-direction: column;
// flex: 1 0;
// width: calc(100% - 40px);
// margin: 15px 20px;

export default function MyCalendar(props) {
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);

  function handlerSelectEvent(event) {
    setCurrentTask(event);
    setVisibleTaskInformation(true);
  }

  return (
    <div className="mainHome">
      <Header>
        <h2>Calendar</h2>
      </Header>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={{
          month: true,
          week: true,
          day: true,
          work_week: true,
        }}
        onSelectEvent={event => handlerSelectEvent(event)}
        onSelecting={() => {
          return true;
        }}
        onSelectSlot={range => {
          //create task
          alert(
            `you selected ${range.start.toLocaleDateString()} ${range.start.toLocaleTimeString()}-${range.end.toLocaleDateString()} ${range.end.toLocaleTimeString()} `
          );
        }}
        selectable={true}
      />
      {visibleTaskInformation === true ? (
        <TaskInformation task={currentTask} />
      ) : null}
    </div>
  );
}
