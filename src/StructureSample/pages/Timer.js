// FilterS
//2xButtons -> current, weeks view

//TimerCurrent
//all active task with PlayStop.js Component
//Time counter
// Maybe like AsideTimer???

//TimerWeek
//DataHeader.js
//99999xTimerTask
// Total time counter for each day

import React from "react";
import DateHeader from "../atoms/DateHeader";
import PlayStop from "../molecules/PlayStop";

function FiltrS() {
  return <button>FiltrS</button>;
}

function TimerCurrent({ tasks }) {
  return (
    <>
      <h2>Timer</h2>
      <button>Current</button>
      <button>Week</button>
      <FiltrS />
      {tasks.map(task => {
        return (
          <div>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <PlayStop classIcon="iconSVG" />
            <p>04:20</p>
          </div>
        );
      })}
    </>
  );
}

function TimerTask({ task }) {
  return (
    <>
      <div className={"displayTimerWeekTask"}>
        <p className={"width100"}>{task.title}</p>
        <p className={"width100"}>{task.description}</p>
        <div className={"displayFlexHour"}>
          <p className={"widthProcent12"}>04:20</p>
          <p className={"widthProcent12"}>04:20</p>
          <p className={"widthProcent12"}>04:20</p>
          <p className={"widthProcent12"}>04:20</p>
          <p className={"widthProcent12"}>04:20</p>
          <p className={"widthProcent12"}>04:20</p>
        </div>
      </div>
    </>
  );
}

function TimerWeek({ tasks }) {
  return (
    <>
      <h2>Timer</h2>

      <button>Current</button>
      <button>Week</button>
      <FiltrS />
      <div className={"displayTimerWeekHeader"}>
        <p>Task description</p>
        <DateHeader incommingDate={[2020, 10, 13]} isDateVisible={false} />
      </div>
      <div>
        {tasks.map(task => {
          return <TimerTask task={task} />;
        })}
      </div>
      <div className={"displayFlexHourTotal"}>
        <p>Total:</p>
        <p>04:20</p>
        <p>04:20</p>
        <p>04:20</p>
        <p>04:20</p>
        <p>04:20</p>
        <p>04:20</p>
        <p>04:20</p>
      </div>
    </>
  );
}

function Timer({ tasks, view }) {
  return (
    <>
      {view === "week" ? (
        <TimerWeek tasks={tasks} />
      ) : (
        <TimerCurrent tasks={tasks} />
      )}
    </>
  );
}

export default Timer;
