//input
//button to apply

import React from "react";
import FilterIcon from "../../img/filter-icon.svg";
import Image from "../atoms/Image";
import Input from "../atoms/Input";

import styles from "../../App.css";

function FilterS() {
  return (
    <div>
      <Image
        classImage={styles.filterIcon}
        srcImage={FilterIcon}
        alternateTextImage="FilterIcon"
      />{" "}
      <Input className={null} placeholder={"Wanna filter?"} />
    </div>
  );
}

export default FilterS;
