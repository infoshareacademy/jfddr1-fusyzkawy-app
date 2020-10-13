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

function FilterXXL({ style, text }) {
  return (
    <div style={style}>
      <h3>Filter {text}</h3>
      <p>Sort by</p>
      <Input />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Button />
    </div>
  );
}

export default FilterXXL;
