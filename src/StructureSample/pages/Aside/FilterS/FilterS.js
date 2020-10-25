import React from "react";
import FilterIcon from "../../../../img/filter-icon.svg";
import { FilterSStyled, FilterInput, ImageStyled } from "./FilterSStyled";

function FilterS() {
  return (
    <FilterSStyled>
      <ImageStyled src={FilterIcon} alt="filter icon" />

      <FilterInput type="text" placeholder={"Wanna filter?"} />
    </FilterSStyled>
  );
}

export default FilterS;
