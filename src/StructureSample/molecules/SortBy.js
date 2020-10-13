//h3 -> Sort by...
//Radio input -> options for sorting
import React from "react";
import RadioInput from "../atoms/RadioInput";

function SortBy({ style, text }) {
  return (
    <div style={style}>
      <h3>Sort by</h3>
      <RadioInput text="" style={{}} isChecked="" />
      <RadioInput text="" style={{}} isChecked="" />
      <RadioInput text="" style={{}} isChecked="" />
      <RadioInput text="" style={{}} isChecked="" />
    </div>
  );
}

export default SortBy;
