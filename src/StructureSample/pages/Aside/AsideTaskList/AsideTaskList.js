import React from "react";
import { AsideTaskListStyled } from "./AsideTaskListStyled";
import FilterS from "../../../molecules/FilterS/FilterS";
import FilterIconGrey from "../../../../img/filter-icon-grey.svg";

const AsideTaskList = () => {
  return (
    <AsideTaskListStyled>
      <FilterS viewTasks={true} icon={FilterIconGrey} />
    </AsideTaskListStyled>
  );
};

export default AsideTaskList;
