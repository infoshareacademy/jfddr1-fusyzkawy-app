import React, { useContext } from "react";
import { AsideTaskListStyled } from "./AsideTaskListStyled";
import { UserData } from "../../../../contexts/UserData";
import AsideTask from "../AsideTask/AsideTask";
import FilterS from "../FilterS/FilterS";

const AsideTaskList = () => {
  const { userTasks } = useContext(UserData);
  console.log(userTasks);
  return (
    <AsideTaskListStyled>
      <FilterS />
      {userTasks.map(task => (
        <AsideTask title={task.title} />
      ))}
    </AsideTaskListStyled>
  );
};

export default AsideTaskList;
