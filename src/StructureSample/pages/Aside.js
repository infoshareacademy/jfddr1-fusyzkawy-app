import React from "react";
import Logo from "../../img/logo-krab_without.png";
import FilterS from "../molecules/FilterS";

const Aside = () => {
  return (
    <div className="asideHome">
      <img src={Logo} alt="logo" />
      <h3>AsideNavidżejszion</h3>
      <FilterS />
    </div>
  );
};

export default Aside;
