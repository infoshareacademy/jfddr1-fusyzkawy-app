import React from "react";
import "./App.css";
import SortBy from "./StructureSample/molecules/SortBy";
import Tasks from "./StructureSample/pages/Tasks";
import FilterXXL from "./StructureSample/molecules/FilterXXL";

function AppRadek() {
  return (
    <div className="App">
      <SortBy />
      <Tasks />
      <FilterXXL text="Tasks" />
    </div>
  );
}

export default AppRadek;
