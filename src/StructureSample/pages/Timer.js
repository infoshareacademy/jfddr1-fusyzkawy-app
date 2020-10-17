import React, { useState } from "react";
import DateHeader from "../atoms/DateHeader";
import PlayStop from "../molecules/PlayStop";
import FilterS from "../molecules/FilterS";

function TimerCurrent({ tasks }) {
  return (
    <div>
      {tasks.map(task => {
        return (
          <div className="displayFLexRow2">
            <p>{task.title}</p>
            <p>{task.description}</p>
            <PlayStop classIcon="iconSVG" />
            <p>04:20</p>
          </div>
        );
      })}
    </div>
  );
}

function TimerTask({ task }) {
  return (
    <>
      <div className={"displayTimerWeekTask"}>
        <p className={"width100"}>{task.title}</p>
        <div className={"displayFlexHour"}>
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
    <div>
      <div className={"displayTimerWeekHeader"}>
        <p>Task description</p>
        <DateHeader
          incommingDate={[2020, 10, 13]}
          isDateVisible={true}
          numberOfDay="5"
        />
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
      </div>
    </div>
  );
}

function Timer({ tasks }) {
  const [currentView, setCurrentView] = useState("week");
  console.log(currentView);
  return (
    <div className="mainHome">
      <h2>Timer</h2>
      <button onClick={() => setCurrentView("current")}>Current</button>
      <button onClick={() => setCurrentView("week")}>Week</button>
      <FilterS />
      {currentView === "week" ? (
        <TimerWeek tasks={tasks} />
      ) : (
        <TimerCurrent tasks={tasks} />
      )}
    </div>
  );
}

export default Timer;
