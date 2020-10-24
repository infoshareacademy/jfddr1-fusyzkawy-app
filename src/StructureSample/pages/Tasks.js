import React from "react";
import Button from "../atoms/Button";
import PlayStop from "../molecules/PlayStop";

function Tasks() {
  return (
    <div className="mainHome" style={{ border: "1px solid black" }}>
      <header>
        <h2>Tasks</h2>
      </header>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h3>Task name</h3>
        <h3>Task type</h3>
        <h3>Task description</h3>
        <h3>Date</h3>
        <h3>Start</h3>
        <h3>End</h3>
        <h3>Duration</h3>
        <h3>Actions</h3>
      </div>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p>Task 1</p>
        <p>Work</p>
        <p>Description text</p>
        <p>8:00:00</p>
        <p>8:00:00</p>
        <p>8:00:00</p>
        <p>8:00:00</p>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: 5,
            justifyContent: "space-around",
          }}
        >
          <PlayStop />
          <Button text="edit" />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
