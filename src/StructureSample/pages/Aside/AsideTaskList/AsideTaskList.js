import React, { useContext } from "react";
import { AsideTaskListStyled } from "./AsideTaskListStyled";
import { UserData } from "../../../../contexts/UserData";
import AsideTask from "../AsideTask/AsideTask";
import FilterS from "../../../molecules/FilterS/FilterS";

const AsideTaskList = () => {
  const { filteredTasks } = useContext(UserData);
  return (
    <AsideTaskListStyled>
      <FilterS />
      {filteredTasks.map(task => (
        <AsideTask key={task.id} asideTask={task} />
      ))}
    </AsideTaskListStyled>
  );
};

export default AsideTaskList;
