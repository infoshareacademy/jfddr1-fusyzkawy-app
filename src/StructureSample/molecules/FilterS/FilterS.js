// /*esliasdnt-disable*/
import React, { useState, useEffect, useContext } from "react";
import FilterIcon from "../../../img/filter-icon.svg";
import {
  FilterSStyled,
  FilterInput,
  ImageStyled,
} from "../FilterS/FilterSStyled";
import { UserData } from "../../../contexts/UserData";

function FilterS() {
  const { userTasks } = useContext(UserData);
  const [filteredTasks, setFilteredTasks] = useState(userTasks);
  const [inputValue, setInputValue] = useState("");

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    userTasks !== [] &&
      setFilteredTasks(
        userTasks.filter(taskToFilter => {
          return taskToFilter.title
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        })
      );
  }, [userTasks, setFilteredTasks, inputValue]);

  return (
    <FilterSStyled>
      <ImageStyled src={FilterIcon} alt="filter icon" />
      <FilterInput
        type="text"
        value={inputValue}
        onChange={event => changeHandler(event)}
        placeholder={"Wanna filter?"}
      />
    </FilterSStyled>
  );
}

export default FilterS;
