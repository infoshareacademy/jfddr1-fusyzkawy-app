import React from "react";
import { AsideTaskListStyled } from "./AsideTaskListStyled";
import FilterS from "../../../molecules/FilterS/FilterS";

const AsideTaskList = () => {
  return (
    <AsideTaskListStyled>
      <FilterS viewTasks={true} />
    </AsideTaskListStyled>
  );
};

export default AsideTaskList;
