//Header -> Tasks

//Heading: "task name", "Task type", "Task description", "Data", "Start", "End", "Duration"

//One Tasks:
//Button -> "edit"? maybe with img/svg/icon?
//Content like in heading
//PlayStop.js
import React from "react";
import Button from "../atoms/Button";
import PlayStop from "../molecules/PlayStop";
import Date from "../atoms/Date";

function Tasks({ style, text }) {
  return (
    <div style={style}>
      <header>
        <h2>Tasks</h2>
      </header>
      <div>
        <h3>Task name</h3>
        <h3>Task type</h3>
        <h3>Task description</h3>
        <h3>Date</h3>
        <h3>Start</h3>
        <h3>End</h3>
        <h3>Duration</h3>
        <h3>Actions</h3>
      </div>
      <div>
        <p>Task 1</p>
        <p>Work</p>
        <p>Description text</p>
        <Date />
        <Date />
        <Date />
        <p>8:00:00</p>
        <div>
          <PlayStop />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
