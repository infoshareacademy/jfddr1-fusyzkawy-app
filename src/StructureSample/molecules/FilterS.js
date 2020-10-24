import React from "react";
import FilterIcon from "../../img/filter-icon.svg";
import Image from "../atoms/Image";
import Input from "../atoms/Input";

function FilterS() {
  return (
    <div className="filterContainer">
      <Image
        classImage="filterIcon"
        srcImage={FilterIcon}
        alternateTextImage="filter icon"
      />
      <Input
        classInput="filterInput"
        placeholder={"Wanna filter?"}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default FilterS;
