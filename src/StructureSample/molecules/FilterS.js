//input
//button to apply

import React from "react";
import FilterIcon from "../../img/filter-icon.svg";
import Image from "../atoms/Image";
import Input from "../atoms/Input";

import styles from "../../App.css";

function FilterS() {
  return (
    <div className="filterContainer">
      <Image
        classImage="filterIcon"
        srcImage={FilterIcon}
        alternateTextImage="filter icon"
      />
      <Input classInput="filterInput" placeholder={"Wanna filter?"} />
    </div>
  );
}

export default FilterS;
