import React, { useState, useEffect, useContext } from "react";
import {
  FilterSStyled,
  FilterInput,
  ImageStyled,
} from "../FilterS/FilterSStyled";
import { UserData } from "../../../contexts/UserData";
import AsideTask from "../../pages/Aside/AsideTask/AsideTask";

function FilterS({ viewTasks, icon }) {
  const { userTasks } = useContext(UserData);
  const [reformattedData, setReformattedData] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(userTasks);
  const [inputValue, setInputValue] = useState("");

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setReformattedData(
      userTasks.map(elem => {
        if (typeof elem.start === "string") {
          elem = { ...elem };
          elem.start = new Date(
            ...elem.start.split(" ").map(elem => parseInt(elem))
          );
          elem.start.setMonth(elem.start.getMonth() - 1);
          elem.end = new Date(
            ...elem.end.split(" ").map(elem => parseInt(elem))
          );
          elem.end.setMonth(elem.end.getMonth() - 1);
        }
        return elem;
      })
    );
  }, [userTasks]);

  useEffect(() => {
    reformattedData !== [] &&
      setFilteredTasks(
        reformattedData.filter(taskToFilter => {
          return taskToFilter.title
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        })
      );
  }, [reformattedData, setFilteredTasks, inputValue]);

  return (
    <>
      <FilterSStyled>
        <ImageStyled src={icon} alt="filter icon" />
        <FilterInput
          type="text"
          value={inputValue}
          onChange={event => changeHandler(event)}
          placeholder={"Wanna filter?"}
        />
      </FilterSStyled>

      {viewTasks &&
        filteredTasks.map(task => (
          <AsideTask key={task.taskId} asideTask={task} />
        ))}
    </>
  );
}

export default FilterS;
