//h3 -> Sort by...
//Radio input -> options for sorting
import React from "react";
import RadioInput from "../atoms/RadioInput";

function SortBy() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 10,
        width: 200,
      }}
    >
      <h3>Sort by</h3>
      <RadioInput
        categories={["Priority", "Start Date", "In Progress", "Completed"]}
        name="sort"
      />
    </div>
  );
}

export default SortBy;
