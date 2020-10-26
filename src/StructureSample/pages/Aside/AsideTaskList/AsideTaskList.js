import React, { useContext } from "react";
import { AsideTaskListStyled } from "./AsideTaskListStyled";
import { UserData } from "../../../../contexts/UserData";
import AsideTask from "../AsideTask/AsideTask";
import FilterS from "../../../molecules/FilterS/FilterS";

const AsideTaskList = () => {
  const { userTasks, filteredTasks } = useContext(UserData);
  return (
    <AsideTaskListStyled>
      <FilterS tasksToFilter={userTasks} />
      {filteredTasks.map(task => (
        <AsideTask key={task.id} asideTask={task} />
      ))}
    </AsideTaskListStyled>
  );
};

export default AsideTaskList;
