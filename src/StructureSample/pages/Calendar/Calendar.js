import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import events from "../../../event_test";
import styled from "styled-components";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";

const localizer = momentLocalizer(moment);

const Header = styled.header`
  text-align: left;
  padding: 15px 20px 5px;
  background-color: var(--basic-white);
  font-size: 1.5rem;
`;

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
            `You selected: \n ${range.start.toLocaleDateString()} ${range.start.toLocaleTimeString()} - ${range.end.toLocaleDateString()} ${range.end.toLocaleTimeString()} \n In feature - you will be able to add task in such method`
          );
        }}
        selectable={true}
      />
      {visibleTaskInformation === true ? (
        <TaskInformation
          task={currentTask}
          onCancel={() => setVisibleTaskInformation(false)}
        />
      ) : null}
    </div>
  );
}
