import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./Calendar.css";
import styled from "styled-components";
import TaskInformation from "../../molecules/TaskInformation/TaskInformation";
import AddTaskForm from "../../molecules/AddTaskForm/AddTaskForm";
import { UserData } from "../../../contexts/UserData";
import TaskModifacation from "../../molecules/TaskInformation/TaskModification";
import {
  stringDateToDateFormat,
  dateFormatToObjectForInputs,
} from "../../utils/dateFunction";
//import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Header = styled.header`
  text-align: left;
  padding: 15px 20px 5px;
  background-color: var(--basic-white);
  font-size: 1.5rem;
`;

export default function MyCalendar(props) {
  const [reformattedData, setReformattedData] = useState([]);
  const { userTasks } = useContext(UserData);
  const [activeAddTaskForm, setActiveAddTaskForm] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [visibleTaskInformation, setVisibleTaskInformation] = useState(false);
  const [visibleTaskModification, setVisibleTaskModification] = useState(false);
  const [taskDate, setTaskDate] = useState({
    startTime: "",
    startDate: "",
    endTime: "",
    endDate: "",
  });

  function handlerSelectEvent(event) {
    setCurrentTask(event);
    setVisibleTaskInformation(true);
  }

  function modifyTask() {
    setVisibleTaskInformation(false);
    setVisibleTaskModification(true);
  }

  useEffect(() => {
    setReformattedData(stringDateToDateFormat(userTasks));
  }, [userTasks]);

  return (
    <div className="mainHome">
      <Header>
        <h2>Calendar</h2>
      </Header>
      <Calendar
        localizer={localizer}
        events={reformattedData}
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
          setTaskDate(dateFormatToObjectForInputs(range));
          !activeAddTaskForm && setActiveAddTaskForm(true);
        }}
        selectable={true}
      />
      {visibleTaskInformation === true ? (
        <TaskInformation
          task={currentTask}
          onChange={modifyTask}
          onCancel={() => setVisibleTaskInformation(false)}
        />
      ) : null}
      {visibleTaskModification === true ? (
        <TaskModifacation
          task={currentTask}
          onCancel={() => setVisibleTaskModification(false)}
          onApply={() => setVisibleTaskInformation(true)}
        />
      ) : null}
      {activeAddTaskForm === true ? (
        <AddTaskForm
          closeModal={value => setActiveAddTaskForm(value)}
          initStartData={taskDate.startDate}
          initStartTime={taskDate.startTime}
          initEndData={taskDate.endDate}
          initEndTime={taskDate.endTime}
        />
      ) : null}
    </div>
  );
}
