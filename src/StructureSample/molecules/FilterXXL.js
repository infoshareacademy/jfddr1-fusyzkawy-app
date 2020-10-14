//h3 -> filter...
//sort by
//input -> write sth
//checkbox -> tags
//checkbox -> data range
//checkbox -> state of task
//ckechbox -> priority of task
//button -> "Apply"
import React from "react";
import Input from "../atoms/Input";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

function FilterXXL({ text }) {
  return (
    <div style={{ border: "1px solid black", width: 200 }}>
      <h3>Filter {text}</h3>
      <Input placeholder="Filter tasks" />
      <p>Sort by</p>
      <Checkbox
        categories={["tags", "date range", "state of task", "priority"]}
        name="filter"
      />
      <Button text="Apply" />
    </div>
  );
}

export default FilterXXL;
